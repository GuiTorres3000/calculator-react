import { createContext, useState } from "react";

type CalculatorContextType = {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
      const [history, setHistory] = useState<string[]>([]);

      function updateHistory(operation: string, parsedResult: string) {
            setHistory((prev) => [... prev, `${operation}=${parsedResult}`])
      }

      return (
            <CalculatorContext.Provider value={{ history, updateHistory }}>
                  {children}
            </CalculatorContext.Provider >
      );
}

export { CalculatorContext }