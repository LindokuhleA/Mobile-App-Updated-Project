import React from 'react';

// syled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const { tertiary } = colors;

const StyledText = styled.Text`
    font-size: 15px;
    color: ${tertiary};
    text-align: center;
`;

//text-align: center... ote the change has been made

export default window.RegularText = (props) => {
    return(
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}