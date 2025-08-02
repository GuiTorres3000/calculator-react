# CalculadoraReact (Context API + LocalStorage + CustomHooks)

Uma calculadora desenvolvida com React, TypeScript, Tailwind e Vite, aplicando o Modelo Atômico de Componentização. (`atoms`, `molecules`, `organisms` e `templates`)
Este projeto foi criado para aprofundar conhecimentos em conceitos de React e TypeScript, com foco em boas práticas, tipagem robusta e arquitetura escalável.

## ✨ Conceitos Aplicados
- Boas práticas de acessibilidade e semântica.
React:
- Histórico persistente de operações armazenadas por `localStorage`.
- Comunicação entre componentes através de `Contextos` encapsulados por componentes de `Providers` (Gerenciamento global do histórico e lógica de operações matemáticas).
- Hooks customizados para realização de cálculo e chamada do contexto
TS:
- Type aliases e utility types (Omit, Pick, Partial)
- Uso de keyof, typeof e generics para tipagem precisa
- Componentes polimórficos (Ex: Text, que aceita diferentes elementos HTML via prop)
Tailwind:
- Variáveis de estilização personalizadas (Tailwind)
- Componentes responsívos utilizando Tailwind

## Estrutura do Projeto
```bash
src/
  components/
    atoms/        # Botões, textos
    molecules/    # Cards
    organisms/    # Display, teclado
    templates/    # Calculadora, histórico
  contexts/       # Contexto global da calculadora
  hooks/          # Hooks customizados
```

## 🚀 Como Executar o Projeto
```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```
