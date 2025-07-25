import React from 'react'

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
type TextProps<E extends React.ElementType = 'span'> = {
/*E extends React.ElementType é um tipo genérico (que retorna a tipagem chamada), 
que descreve que E deve ser um tipo de elemento HTML, span como padrão */
  as?: E;
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children' | 'className'>;
/*
React.ComponentPropsWithoutRef<E> extrai todas as props que um elemento React do tipo E generico aceita,
exceto os refs com forwarding (por isso o "WithoutRef").
Omit<> está desconsiderando as props de: 'as', 'children' e 'className'
*/

export function Text<E extends React.ElementType = 'span'>({
  as,
  variant = 'default',
  className,
  children,
  ...props
}: TextProps<E>) {
const Component = as || 'span'
  const classes = [
    textVariants[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
} 