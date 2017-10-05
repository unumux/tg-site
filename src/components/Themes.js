import React from 'react';
import styled from 'styled-components';

const StyledThemes = styled.div`
    color: red;
`;

export const Themes = props =>
    <StyledThemes>
        <h1>theme-variable-whatever</h1>
        <p>Hex Value</p>
    </StyledThemes>
;

export default { Themes };