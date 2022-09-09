import React from 'react';

//styled component
import styled from 'styled-components/native';
import { colors } from '../colors';
const  { accent } = colors;
import SmallText from '../Texts/SmallText';

const StyledPressable = styled.Pressable`
    padding-vertical: 5px;
    align-self: center;
`;

export default window.PressableText = (props) => {
    return (
        <StyledPressable onPress={props.onPress} {...props}>
            <SmallText style={{ color: accent}}>{props.children}</SmallText>
        </StyledPressable>
    )
}