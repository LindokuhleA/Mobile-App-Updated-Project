import React from 'react';

// style component

import styled from 'styled-components/native';
import { colors }  from '../colors';
const { tertairy } = colors;

const StyledText = styled.Text`
    font-size: 30px;
    color: ${tertairy};
    text-align: left
`;
// text-align: center... note the change has been made


export default window.BigText = (props) => {
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}