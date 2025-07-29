import { Button } from "../atoms/Button";
import type { ButtonVariant } from "../atoms/Button";

interface ButtonListProps {
      name: string;
      className?: string;
      variant?: ButtonVariant;
}

const buttonsList: ButtonListProps[][] = [
      [
            { name: "CE" },
            { name: "C", className: "flex-1 h-16" },
            { name: "/", variant: "primary" },
      ],
      [
            { name: "7" },
            { name: "8" },
            { name: "9" },
            { name: "*", variant: "primary" },
      ],
      [
            { name: "4" },
            { name: "5" },
            { name: "6" },
            { name: "-", variant: "primary" },
      ],
      [
            { name: "3" },
            { name: "2" },
            { name: "1" },
            { name: "+", variant: "primary" },
      ],
      [
            { name: "0", className: "flex-1 h-16" },
            { name: "," },
            { name: "=", className: "w-16 h-16 bg-[#7F45E2]" },
      ],
];

export function CalculatorKeyboard() {
      return (

            <div className="flex flex-col gap-3">

                  {buttonsList.map((row, index) => (
                        <div key={`row-${index}`} className="flex gap-3">
                              {row.map((button) => (
                                    <Button key={button.name}
                                          className={button.className ? button.className : `w-16 h-16`}
                                          variant={button.variant ? button.variant : `default`}>
                                          {button.name}
                                    </Button>
                              ))}

                        </div>
                  ))
                  }
            </div>

      );
}