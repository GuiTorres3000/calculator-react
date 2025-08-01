import { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}

export { CalculatorContext }; 