import React from 'react';
import { ButtonPropType } from '../Models/Button';
import { Key } from '../styles';

const Button = ({ label, value, onButtonPress }: ButtonPropType) => {
    return (
        <>
            <Key onClick={() => onButtonPress(value)}>
                {label}
            </Key>
        </>
    );
}

export default Button