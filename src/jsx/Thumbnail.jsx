import styled from 'styled-components'

const Img = styled.div`
    background-image: url(${props => props.image});
    width: 200px;
    height: 200px;
    background-color:${props => props.image ? 'none' : '#D9D9D9'};
    margin-right: 35px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
`

function Thumbnail(props){
    const { image } = props

    return(
        <Img image={image}></Img>
    )
}

export default Thumbnail