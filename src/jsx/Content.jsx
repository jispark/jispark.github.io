import styled from 'styled-components'

const StyledContent = styled.div`
    font-size: 18px;
    margin-top: 2px;
`

function Content(props){
    const { content } = props

    return(
        <StyledContent>{content}</StyledContent>
    )
}

export default Content