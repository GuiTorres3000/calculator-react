import { useCalculatorOperations } from "../../hooks/useCalculatorOperations";
import { Card } from "../molecules/Card";
import { CalculatorDisplay } from "../organisms/CalculatorDisplay";
import { CalculatorKeyboard } from "../organisms/CalculatorKeyboard";

export function Calculator() {
      const { operation, result, handleCalculation } = useCalculatorOperations();
 
      const handleInputClick = (name: string) => {
            handleCalculation(name);
      };

      return (
            <Card className={`flex flex-col gap-12 w-[22.25rem]
            pt-12 pb-8 px-8`}>
                  <CalculatorDisplay operation={operation} result={result} />

                  <CalculatorKeyboard onButtonClick={handleInputClick} />
            </Card>
      );
}