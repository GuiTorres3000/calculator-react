import type { ReactNode } from "react";
import { Text } from "./Text";

interface ButtonProps {
      children: ReactNode;
      className?: string;
}

export function Button({ className = '', children }: ButtonProps) {

      return (
            <Text as="button" variant="heading"
                  className={`flex items-center justify-center rounded-xl p-3 cursor-pointer 
            bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow)
            ${className ? className : ''} `}>
                  {children}
            </Text>

      );
}