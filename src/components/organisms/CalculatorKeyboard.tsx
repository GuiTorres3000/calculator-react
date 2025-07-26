import { Button } from "../atoms/Button";

export function CalculatorKeyboard() {
      return (

            <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                        <Button className="w-16 h-16">CE</Button>
                        <Button className="flex-1/2 h-16">C</Button>
                        <Button variant="primary" className="w-16 h-16">/</Button>
                  </div>
                  <div className="flex gap-3">
                        <Button className="w-16 h-16">CE</Button>
                        <Button className="flex-1/2 h-16">C</Button>
                        <Button variant="primary" className="w-16 h-16">/</Button>
                  </div>
            </div>

      );
}