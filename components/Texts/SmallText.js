import React from 'react';


// styled componemts
import styled from 'styled-components/native';
import { colors } from '../colors';
const { tertiary } = colors;

const StyledText = styled.Text`
    font-size: 13px;
    color: ${tertiary};
    text-align: left;
`;

export default window.SmallText = (props) => {
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>

        //read to be used as props, it has been enabled.
    )
}