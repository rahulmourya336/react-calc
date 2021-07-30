import { FC } from 'react';
import { ButtonPropType } from '../Models/Button';
import { Key } from '../styles';

const Button: FC<ButtonPropType> = ({ label, value, onButtonPress, classes }) => (
    <Key onClick={() => onButtonPress(value)} className={classes}>
        {label}
    </Key>
);

export default Button;