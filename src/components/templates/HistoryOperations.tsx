import { useCalculatorContext } from "../../hooks/useCalculatorContext";
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";


export function HistoryOperations() {

      const { history } = useCalculatorContext();

      return (
            <Card className="flex-col flex-start py-16 px-8 w-[22.25rem]">
                  <Text as="h1" variant="heading" className="mb-4 items-start">Histórico de Operações</Text>

                  {history.length > 0 ? (
                        <ul className="flex flex-col gap-2 items-start">
                              {history.map((operation, index) => (
                                    <Text as="li" key={index} variant="muted">{operation}</Text>
                              ))}
                        </ul>
                  ) : (
                        <Text variant="muted">Nenhuma operação recente</Text>
                  )}
            </Card>
      );
}