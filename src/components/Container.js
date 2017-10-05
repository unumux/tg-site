import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
`;

export const Container = props =>
    <StyledContainer>{props.children}</StyledContainer>;

export default { Container };