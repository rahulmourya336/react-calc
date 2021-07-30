import React from 'react';
import Button from './Button';
import Display from './Display';

const buttonList = [
    'AC', '±', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='];

const handleButtonClick = (e: Event) => {
    console.log('Button Pressed', e.target);
}

const Calculator = () => {
    return (
        <>
            <Display valueToShow="0" />

            {
                buttonList.map((value: string, idx: number) => {
                    return (
                        <React.Fragment key={idx} >
                            <Button label={value} value={value} onButtonPress={handleButtonClick} />
                        </React.Fragment>
                    )
                })
            }
        </>
    );
}

export default Calculator;