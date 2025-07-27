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
                        <Button className="w-16 h-16">7</Button>
                        <Button className="w-16 h-16">8</Button>
                        <Button className="w-16 h-16">9</Button>
                        <Button variant="primary" className="w-16 h-16">*</Button>
                  </div>
                  <div className="flex gap-3">
                        <Button className="w-16 h-16">4</Button>
                        <Button className="w-16 h-16">5</Button>
                        <Button className="w-16 h-16">6</Button>
                        <Button variant="primary" className="w-16 h-16">-</Button>
                  </div>
                  <div className="flex gap-3">
                        <Button className="w-16 h-16">1</Button>
                        <Button className="w-16 h-16">2</Button>
                        <Button className="w-16 h-16">3</Button>
                        <Button variant="primary" className="w-16 h-16">+</Button>
                  </div>
                   <div className="flex gap-3">
                        <Button className="flex-1/2 h-16">0</Button>
                        <Button className="w-16 h-16">,</Button>
                        <Button variant="primary" className="w-16 h-16">=</Button>
                  </div>
            </div>

      );
}