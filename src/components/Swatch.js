import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`

`;

const Heading = styled.h1`
    margin: 0;
`;

const Box = styled.div`
    background-color: ${props => props.hex};
    height: 10rem;
    width: 10rem;
`;

const Description = styled.p`
    margin: 0;
`;

export const Swatch = props => 
    <StyledSwatch>
        <Heading>{props.name}</Heading>
        <Box hex={props.hex}></Box>
        <Description>{props.hex}</Description>
    </StyledSwatch>

export default { Swatch };