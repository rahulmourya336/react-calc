import { FC } from 'react';
import { ButtonPropType } from '../Models/Button';
import { Key } from '../styles';

const Button: FC<ButtonPropType> = ({ label, value, onButtonPress }) => (
    <Key onClick={() => onButtonPress(value)}>
        {label}
    </Key>
);

export default Button;