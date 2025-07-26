import { Card } from "../molecules/Card";
import { CalculatorDisplay } from "../organisms/CalculatorDisplay";
import { CalculatorKeyboard } from "../organisms/CalculatorKeyboard";

export function Calculator() {
      return (
            <Card className={`flex flex-col gap-7 w-[22.25rem]
            pt-12 pb-8 px-8`}>
                  <CalculatorDisplay operation="1+1" result="2" />

                  <CalculatorKeyboard />
            </Card>
      );
}