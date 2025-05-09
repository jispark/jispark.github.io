import styled from 'styled-components'

const StyledDate = styled.p`
    font-weight: 400;
    font-size: ${props=>props.size}px;
    color: #A3A3A3;
    margin-left: 15px;
`

function DateText(props){
    const { date, size } = props

    return(
        <StyledDate size={size}>{date}</StyledDate>
    )
}

export default DateText