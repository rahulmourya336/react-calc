import { FC, useState } from "react";
import { buttonList } from "../../constants";
import calculate from "../../logic/calculate";
import { ButtonListType } from "../../models/button";
import { KeyContainer } from "../../styles";
import Button from "../button";
import Display from "../display";

const Calculator: FC = () => {
  const [_state, _setState] = useState<any>({
    next: null,
    operation: null,
    total: null,
  });

  const handleButtonClick = (inputValue: string) => {
    const result = calculate(_state, inputValue);
    if (!result) return;
    _setState(result);
  };

  return (
    <>
      <Display
        valueToShow={_state.next || _state.total || "-"}
        operator={_state.operation}
      />
      <KeyContainer>
        {buttonList.map((btnValue: ButtonListType, idx: number) => {
          return (
            <Button
              key={btnValue.name}
              label={btnValue.name}
              value={btnValue.value}
              onButtonPress={handleButtonClick}
              classes={btnValue.classes}
            />
          );
        })}
      </KeyContainer>
    </>
  );
};

export default Calculator;
