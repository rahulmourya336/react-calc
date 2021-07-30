import { FC } from 'react';
import { DisplayPropType } from '../Models/Display';
import { Screen } from '../styles';

const Display: FC<DisplayPropType> = ({ valueToShow }) => <Screen>  {valueToShow}  </Screen>;

export default Display;