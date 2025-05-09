import styled from 'styled-components'

const Intro = styled.h1`
    color: #2E2E2E;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: ${props=>props.bottom || '0' }px;
`

function PageName(props){
    const { title, bottom } = props

    return(
        <Intro bottom={bottom}>{title}</Intro>
    )
}

export default PageName