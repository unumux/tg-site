import React from 'react';
import styled from 'styled-components';
import { Swatch } from './Swatch';

const StyledConstants = styled.div`
    display: flex;
    justify-content: space-around;
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
        <Swatch name='Purple' hex='#127881' />
        <Swatch name='Blue' hex='#998877' />
        <Swatch name='Yellowwww' hex='182936' />
        <Add>Add</Add>
    </StyledConstants>