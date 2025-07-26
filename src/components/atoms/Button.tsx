import type { ReactNode } from "react";
import { Text } from "./Text";

const buttonVariants = {
      default: "bg-(--background)",
      primary: "bg-(--primary)",
} as const

type ButtonVariant = keyof typeof buttonVariants

interface ButtonProps {
      variant: ButtonVariant,
      children: ReactNode;
      className?: string;
}

export function Button({ variant = 'default', className, children }: ButtonProps) {
      const buttonClass = buttonVariants[variant];

      return (
            <Text as="button" variant="heading"
                  className={`
                  ${buttonClass}
                  flex items-center justify-center rounded-xl p-3 cursor-pointer 
                  bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow)
                  ${className ? className : ''} `}>
                  {children}
            </Text>

      );
}