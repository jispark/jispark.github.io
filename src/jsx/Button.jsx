import styled from 'styled-components'

const StyledButton = styled.button`
    width: 134px;
    height: ${props=>props.height}px;
    background-color: ${props => props.color};
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    display: block;
    border-radius: ${props=>props.radius}px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.hoverColor};
    }
    transition: all 0.2s ease-in-out;
`
const OutlineButton = styled(StyledButton)`
    background: none;
    border: 1px solid ${props => props.color};
    color: #2E2E2E;
    &:hover{
        background-color: #E1E1E1;
        color: ${props => props.hoverColor};
        border: 1px solid ${props => props.hoverColor};
    }
    
`

// #0C4242; #155C5C; #B0B0B0;
function Button(props){
    // title: 버튼의 이름, onClick: 클릭 시 실행될 것
    const {height, radius, title, onClick} = props
    const color = props.color || "green"
    const colorHex = (color == "green")? '#0C4242' : '#B0B0B0'
    const colorHoverHex = (color == "green")? '#155C5C' : '#0C4242'

    const type = props.type || "solid";

    if(type == "solid"){
        return (
            <StyledButton height={height || 50} radius={radius || 50} 
            color={colorHex} onClick={onClick} hoverColor={colorHoverHex}>
                {title || 'Button'}
            </StyledButton>
        )
    }else if(type == "outline"){
        return (
            <OutlineButton height={height || 50} radius={radius || 50}
            color={colorHex} onClick={onClick} hoverColor={colorHoverHex}>
                {title || 'Button'}
            </OutlineButton>
        )
    }
}

export default Button