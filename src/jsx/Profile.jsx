import styled from 'styled-components'

const StyledProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #0C4242;
`

function Profile(props){
    return(
        <a href='#'><StyledProfile></StyledProfile></a>
    )
}

export default Profile