import styled from 'styled-components'

const StyledTitle = styled.p`
    font-weight: 700;
    font-size: ${props=>props.size}px;
    margin-bottom: ${props=>props.bottom || '15'}px;
`

function TitleText(props){
    const { title, size, bottom } = props

    return(
        <StyledTitle size={size} bottom={bottom}>{title}</StyledTitle>
    )
}

export default TitleText