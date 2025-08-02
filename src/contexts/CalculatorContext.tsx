import { createContext, useEffect, useState } from "react";

type CalculatorContextType = {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
      const [history, setHistory] = useState<string[]>([]);
      const historyStorageKey = 'history';

      useEffect(() => {
            const savedHistory = localStorage.getItem(historyStorageKey);
            setHistory(JSON.parse(savedHistory || '[]'))
      }, [])

      function updateHistory(operation: string, parsedResult: string) {
            setHistory((prev) => {
                  const updatedHistory = [... prev, `${operation}=${parsedResult}`]
                  localStorage.setItem(
                        historyStorageKey,
                        JSON.stringify(updatedHistory)
                  )
                  return updatedHistory;
            });
      }

      return (
            <CalculatorContext.Provider value={{ history, updateHistory }}>
                  {children}
            </CalculatorContext.Provider >
      );
}

export { CalculatorContext }