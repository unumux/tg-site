import React from 'react';
import styled from 'styled-components';
import { Swatch } from './Swatch';


const StyledThemes = styled.section`
    color: red;
`;

const Heading = styled.h1`

`;

const ThemeSection = styled.section`

`;

const SectionHeading = styled.h1`

`;

const Swatches = styled.div`

`;

const StyledSwatch = styled(Swatch)`

`;

export const Themes = props =>
    <StyledThemes>
        <Heading>theme-variable-whatever</Heading>
        <ThemeSection>
            <SectionHeading>Primary Colors</SectionHeading>
            <Swatches>
                <StyledSwatch name="Purple" hex="#f0f" />
                <StyledSwatch name="Purple" hex="#f0f" />
                <StyledSwatch name="Purple" hex="#f0f" />
            </Swatches>
        </ThemeSection>
        <ThemeSection>
            <SectionHeading>Accent Colors</SectionHeading>
            <Swatches>
                <StyledSwatch name="Purple" hex="#f0f" />
                <StyledSwatch name="Purple" hex="#f0f" />
                <StyledSwatch name="Purple" hex="#f0f" />
            </Swatches>
        </ThemeSection>
    </StyledThemes>
;

export default { Themes };