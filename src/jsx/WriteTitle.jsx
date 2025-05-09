import styled from 'styled-components'

const StyledLabel = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
`

function WriteTitle(props){
    const { title } = props

    return(
        <StyledLabel>{title}</StyledLabel>
    )
}

export default WriteTitle