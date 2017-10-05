import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
    background-color: ${props => props.hex};
    border: 2px solid blue;
    padding: 2rem;
`;

const Heading = styled.h1``;

const Description = styled.p``;

export const Swatch = props => 
    <StyledSwatch hex={props.hex}>
        <Heading>{props.name}</Heading>
        <Description>{props.hex}</Description>
    </StyledSwatch>

export default { Swatch };