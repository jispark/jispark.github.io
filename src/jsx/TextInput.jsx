import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: #ffffff;
    height: ${props=>props.height}px;
    width: ${props=>props.width}px;
    display: block;
    margin-bottom: 30px;
    border-radius: 10px;
    resize: none;
    border: 1px solid #CBCBCB;
    padding: 16px 25px 17px 25px;
    font-size: 18px;
    overflow-y: hidden;
    line-height: 150%;
    outline-color: #0C4242;
    &::placeholder {
        color: #A3A3A3;
    }
`

function TextInput(props){
    // height: 높이, value & onChange: 제어 컴포넌트용
    const {text, height, width, value, onChange} = props

    return (
        <StyledTextArea placeholder={text} height={height || 20} width={width || 1160} 
        value={value} onChange={onChange} spellCheck="false"></StyledTextArea>
    )
}

export default TextInput

