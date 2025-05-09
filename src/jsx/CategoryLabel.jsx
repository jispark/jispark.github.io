import styled from 'styled-components'

const StyledCategory = styled.button`
    background-color: #CCF0A6;
    color: #0C4242;
    font-size: 14px;
    font-weight: 500;
    border: none;
    display: block;
    padding: 5px 12px 5px 12px;
    border-radius: 5px;
`

function CategoryLabel(props){
    const { category } = props

    return(
        <StyledCategory>{category}</StyledCategory>
    )
}

export default CategoryLabel