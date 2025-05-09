import React from 'react';

import styled from 'styled-components'

const BasicButton = styled.button`
    background-color: ${props => props.isSelected ? '#CCF0A6' : '#E4E4E4'};
    color: ${props => props.isSelected ? '#0C4242' : '#2E2E2E'};
    border: none;
    font-weight: 400;
    font-size: 18px;
    display: block;
    padding: 8px 25px 8px 25px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.isSelected ? '#CCF0A6' : '#D3D3D3'};
        color: ${props => props.isSelected ? '#0C4242;' : '#2E2E2E'};
    }
    &:active {
         background-color: ${props => props.isSelected ? '#B4E184' : '#B0B0B0'};
    }
`

function CategoryButton(props){
    const { title, onClick, isSelected} = props;

    return(
        <BasicButton isSelected={isSelected} onClick={onClick}>
            {title}
        </BasicButton>
    )
}

export default CategoryButton;