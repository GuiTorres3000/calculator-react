import { useState } from "react";
import { Card } from "../molecules/Card";
import { CalculatorDisplay } from "../organisms/CalculatorDisplay";
import { CalculatorKeyboard } from "../organisms/CalculatorKeyboard";

export function Calculator() {

      const [operation, setOperation] = useState('');
      const [result, setResult] = useState('');
      const handleInputClick = (name: string) => {
            if (name === "=") {
                  const operationResult = eval(operation.replace(/,/g, '.'));
                  const parsedResult = operationResult.toString().replace(/\./g, ",");
                  setResult(parsedResult);
                  return;
            }
            else if (name === "," && !operation.endsWith(",")){
                  setOperation(`${operation},`);
                  return;
            } else {
                  setOperation(`${operation}${operation.endsWith(",") ? "" : " "}${name}`);
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