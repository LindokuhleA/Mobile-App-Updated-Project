import React from 'react';

//styled component
import styled from 'styled-components/native';
import { colors } from '../colors';
const { success, fail } = colors;


const StyledText = styled.Text`
    font-size: 13px;
    color: ${(props) => (props.success ? success : fail)};
    text-align: center;
`;

export default window.MsgBox = (props) => {
    return(
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}