import styled from 'styled-components'

const StyledContent = styled.p`
    color: #686868;
    font-weight: 400;
    font-size: ${props=>props.size}px;
    line-height: ${props=>props.line || '150' }%;
    margin-bottom: ${props=>props.bottom || '30' }px;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props=>props.clamp};
    -webkit-box-orient: vertical;
    word-break: break-all;
`

function ContentText(props){
    const { content, size, line, bottom, clamp } = props

    return(
        <StyledContent size={size} line={line} bottom={bottom} clamp={clamp}>{content}</StyledContent>
    )
}

export default ContentText