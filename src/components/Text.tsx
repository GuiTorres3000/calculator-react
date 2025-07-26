const textVariants = {
  default: 'text-xl text-(--text-primary)',
  muted: 'text-xl text-(--text-secondary)',
  heading: 'text-xl',
  blast: 'text-3xl'
} as const;
/* Quando eu não passo "as const" o TS infere os valores como string. 
O único valor constante é o objeto indentificador (textVariant), ou seja, posso mudar o textVariants.default)
Ao passar as const faz com que os elementos dentro do objeto realmente imutáveis, tendo valores literais.
Ou seja, os valores com "as const" passam a não ser: string mas exatamente: 'text-xl text-(--text-primary)'*/

type TextVariant = keyof typeof textVariants;
/* typeof extrai o tipo da constante textVariants, agora não mais do tipo string, e sim tipos concretos.
Me retornaria algo como:
{
  readonly default: 'text-xl';
  readonly muted: 'text-muted';
  readonly heading: 'text-heading';
  readonly blast: 'text-3xl';
}
Já que estou usando keyof, quero pegar apenas as chaves, assim fazendo o resultado ficar assim: 
type TextVariant = 'default' | 'muted' | 'heading' | 'blast'; */

// Tipo genérico recebe um tipo como entrada e retorna algo tipado com base nisso
interface TextProps extends React.HTMLProps<HTMLElement> {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode; 
}

const Text: React.FC<TextProps> = ({ variant = 'default', className = '', children, ...props }) => {
  const textClass = textVariants[variant];
  return (
    <span className={`${textClass} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Text;