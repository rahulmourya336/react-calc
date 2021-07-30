import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const buttonList = [
    'AC', '±', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];

const Calculator = () => {
    const [output, setOutput] = useState('0');
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');

    const handleButtonClick = (inputValue: string) => {
        if (inputValue === buttonList[0]) {
            setOutput('0');
        }
        else {
            // Add if number
            if (/\d/g.test(inputValue)) {
                if (operator) {
                    setOutput(inputValue);
                    const prevValue = parseFloat(input);
                    const nextValue = parseFloat(input);

                    const newValue: number = performCalculation[operator](prevValue, nextValue);

                    setOutput(String(newValue));
                    setInput(String(newValue));
                    setOperator('');
                } else {
                    setInput(input + inputValue);
                    setOutput(output + inputValue);
                }
            } else {
                setOperator(inputValue);
            }
            console.log('Button Pressed', inputValue);
        }
    }

    const performCalculation: any = {
        '/': (previousValue: number, nextValue: number) => previousValue / nextValue,
        '*': (previousValue: number, nextValue: number) => previousValue * nextValue,
        '-': (previousValue: number, nextValue: number) => previousValue - nextValue,
        '+': (previousValue: number, nextValue: number) => previousValue + nextValue,
        '=': (previousValue: number, nextValue: number) => nextValue
    }


    return (
        <>
            <Display valueToShow={output} />

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