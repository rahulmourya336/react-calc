import { FC } from 'react';
import { INFINITY } from '../Models/Calculator';
import { DisplayPropType } from '../Models/Display';
import { Operator, Screen, ScreenWrapper } from '../styles';

const Display: FC<DisplayPropType> = ({ valueToShow, operator }) =>
    <ScreenWrapper><Screen>  {formatValue(valueToShow)} <Operator>{operator}</Operator></Screen></ScreenWrapper>

const formatValue = (value: string) => {
    if (value === INFINITY) return value;
    const language = navigator.language || 'en-US'
    let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6
    })

    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/);

    if (match) {
        formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0];
    }

    return formattedValue;
}
export default Display;