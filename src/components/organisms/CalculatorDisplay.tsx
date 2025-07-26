import { Text } from "../atoms/Text";

interface CalculatorDisplayProps {
      operation?: string,
      result?: string,
}

export function CalculatorDisplay({ operation, result }: CalculatorDisplayProps) {
      return (

            <div className="flex flex-col gap-2 px-5 cursor-default select-none">
                  <Text as="div" variant="muted" className="flex items-center justify-end">
                        {operation ? operation : ''}
                  </Text>
                  <div className="flex items-center justify-between">
                        <Text variant="muted">=</Text>
                        <Text variant="blast">{result ? result : ''}</Text>
                  </div>
            </div>

      );
}