import { useState } from "react";
import { Card } from "../molecules/Card";
import { CalculatorDisplay } from "../organisms/CalculatorDisplay";
import { CalculatorKeyboard } from "../organisms/CalculatorKeyboard";

export function Calculator() {

      const [operation, setOperation] = useState('');
      const [result, setResult] = useState('');
      const calculate = (expression: string): string => {
            try {
                  const sanitized = expression.replace(/[^-()\d/*+.]/g, '');
                  const result = Function(`return (${sanitized})`)();
                  const fixed = result.toFixed(2);
                  const cleaned = fixed.replace(/\.?0+$/, '');
                  return cleaned.replace('.', ',');
            } catch {
                  return "Erro";
            }
      };

      const handleInputClick = (name: string) => {
            const isOperator = (char: string) => ["+", "-", "*", "/"].includes(char);

            if (result) {
                  setOperation(isNaN(Number(name)) ? `${result}${name}` : name);
                  setResult("");
                  return;
            }
            if (name === "=") {
                  const parsedResult = calculate(operation.replace(/,/g, '.'));
                  if (parsedResult === "Erro" || parsedResult === "Infinity") {
                        setResult("Erro");
                  } else {
                        setResult(parsedResult.replace(/\./g, ","));
                  }
                  return;
            }
            else if (name === "," && !operation.endsWith(",")) {
                  setOperation(`${operation},`);
                  return;
            } else if (name === "C") {
                  setOperation("");
                  setResult("");
                  return;
            } else if (name === "CE") {
                  setResult("");
                  setOperation(operation.slice(0, -1))
                  return;
            } else if (isOperator(name) && isOperator(operation.slice(-1))) {
                  setOperation(operation.slice(0, -1) + name);
                  return;
            } else {
                  setOperation(`${operation}${name}`);
            }
      };

      return (
            <Card className={`flex flex-col gap-12 w-[22.25rem]
            pt-12 pb-8 px-8`}>
                  <CalculatorDisplay operation={operation} result={result} />

                  <CalculatorKeyboard onButtonClick={handleInputClick} />
            </Card>
      );
}