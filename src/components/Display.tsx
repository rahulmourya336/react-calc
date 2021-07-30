import React from 'react';
import { DisplayPropType } from '../Models/Display';
import { Screen } from '../styles';

const Display = ({ valueToShow }: DisplayPropType) => {
    return (
        <>
            <Screen>
                {valueToShow}
            </Screen>
        </>
    );
}

export default Display;