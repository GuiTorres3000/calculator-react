import { useState } from "react";
import { useCalculatorContext } from "./useCalculatorContext";

export function  useCalculatorOperations() {
      const [operation, setOperation] = useState('');
      const [result, setResult] = useState('');
      const { updateHistory } = useCalculatorContext();

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

      function handleCalculation(name: string) {
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
                        updateHistory(operation, parsedResult);
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
      }

      return ({ operation, result, handleCalculation })
}

