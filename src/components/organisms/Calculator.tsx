import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";

export function Calculator(){
      return(
            <Card className={`flex flex-col gap-7 w-[22.25rem]
            pt-12 pb-8 px-8`}>
                  <div className="flex flex-col gap-2 px-5 cursor-default select-none">
                        <Text as="div" variant="muted" className="flex items-center justify-end">
                              1+1
                        </Text>
                  </div>
            </Card>
      );
}