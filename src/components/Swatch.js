import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
`;

const Heading = styled.h1``;

const Description = styled.p``;

export const Swatch = props => 
    <StyledSwatch>
        <Heading>{props.name}</Heading>
        <Description>{props.hex}</Description>
    </StyledSwatch>

export default { Swatch };