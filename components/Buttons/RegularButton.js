import React from 'react';

// styled component
import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
const { primary, accent, tertiary } = colors;


const ButtonView = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${accent};
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
`;

export default window.RegularButton = (props) => {
    return(
        <ButtonView onPress={props.onPress} {...props}>
            <RegularText style={[{ color: tertiary }, {...props?.textStyle}]}>{props.children}</RegularText>
        </ButtonView>
    )
}