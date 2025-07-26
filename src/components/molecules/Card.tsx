import type { ReactNode, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
      children: ReactNode;
      className?: string;
}

export function Card({children, className, ...props}: CardProps) {

      return (
            <div className={`bg-(--background) shadow-(--shadow) rounded-2xl ${className? className : ''}`} {...props}>
                  {children}
            </div>
      );
}