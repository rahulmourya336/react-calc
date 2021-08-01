import React, { FC, useState } from 'react';
import calculate from '../Logic/calculate';
import { buttonList, buttonListType } from '../Models/Button';
import { KeyContainer } from '../styles';
import Button from './Button';
import Display from './Display';

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
    }

    return (
        <>
            <Display valueToShow={_state.next || _state.total || "0" } operator={_state.operation}/>
            <KeyContainer>
                {
                    buttonList.map((btnValue: buttonListType, idx: number) => {
                        return (
                            <React.Fragment key={idx} >
                                <Button label={btnValue.name} value={btnValue.value} onButtonPress={handleButtonClick} classes={btnValue.classes} />
                            </React.Fragment>
                        )
                    })
                }
            </KeyContainer>
        </>
    );
}

export default Calculator;