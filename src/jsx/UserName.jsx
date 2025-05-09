import styled from 'styled-components'

const NickName = styled.h5`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
`

function UserName(props){
    const { name } = props

    return(
        <NickName>{name}</NickName>
    )
}

export default UserName