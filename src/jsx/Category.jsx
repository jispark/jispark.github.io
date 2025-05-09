import styled from 'styled-components'

const SelectButton = styled.select`
    width: 140px;
    height: 50px;
    border-radius: 50px;
    background-color: none;
    color: #0C4242;
    box-shadow: 0 0 0 2px #0C4242 inset; 
    border: none;
    font-weight: 500;
    font-size: 18px;
    display: block;
    padding: 0 20px 0 20px;
    appearance: none;
    outline: none;
    cursor: pointer;

    background-image: url("/chevron-down.png");
    background-repeat: no-repeat;
    background-position: 86% center;
    background-size: 1.5rem;
`

function Category(props){
    const { value, onChange, children} = props;

    return(
            <SelectButton value={value} onChange={onChange}>{children}</SelectButton>
    )
}

export default Category