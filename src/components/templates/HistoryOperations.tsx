import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";


export function HistoryOperations() {

      return (
            <Card className="flex-col flex-start py-10 px-8">
                  <Text as="h1" variant="heading" className="mb-4 items-start">Histórico de Operações</Text>

                  <ul className="flex flex-col gap-2 items-start">
                        <Text as="li">1 + 1 = 2</Text>
                        <Text as="li">1 - 1 = 1</Text>
                        <Text as="li">1 + 2 = 3</Text>
                        <Text as="li">2 + 2 = 4</Text>
                  </ul>
            </Card>
      );
}