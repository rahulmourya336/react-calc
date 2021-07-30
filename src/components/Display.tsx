import { FC } from 'react';
import { DisplayPropType } from '../Models/Display';
import { Screen, ScreenWrapper } from '../styles';

const Display: FC<DisplayPropType> = ({ valueToShow }) => <ScreenWrapper><Screen>  {valueToShow}  </Screen></ScreenWrapper>

export default Display;