import React from 'react';
import styled from 'styled-components';
import { Swatch } from './Swatch';
import { Container } from './Container';

const StyledConstants = styled.section`
    background-color: #ddd;
`;

const Heading = styled.h1`

`;

const StyledSwatch = styled(Swatch)`
    margin-right: 2rem;
`;

const Swatches = styled.div`
    display: flex;
    justify-content: flex-start;
`;


const Add = styled.a`
    background-color: #0ca;
    color: #fff;
    display: inline-block;
    height: 2rem;
    padding: 2rem;

    &:hover {
        background-color: #0da;
        cursor: pointer;
    }
`;


export const Constants = props => 
    <StyledConstants>
        <Container>
            <Heading>Constants</Heading>
            <Swatches>
                <StyledSwatch name='Purple' hex='#127881' />
                <StyledSwatch name='Blue' hex='#669933' />
                <StyledSwatch name='Yellowwww' hex='#ff7700' />
            </Swatches>
            <Add>Add</Add>
        </Container>
    </StyledConstants>