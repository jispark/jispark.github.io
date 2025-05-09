import styled from 'styled-components'

import Thumbnail from './Thumbnail'
import TitleText from './TitleText'
import ContentText from './ContentText'
import CategoryLabel from './CategoryLabel'
import DateText from './DateText'

const StyledWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemContainer = styled.div`
    width: 925px;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
`

function PostItem(props){
    // post: 글 데이터, onClick: 클릭했을 때
    const {post, onClick} = props;

    return (
        <StyledWrapper onClick={onClick}>
            <Container>
                <Thumbnail image={post.image}></Thumbnail>
                <ItemContainer>
                        <TitleText title={post.title} size="26"></TitleText>
                        <ContentText content={post.content} size="16" clamp="2"></ContentText>

                        <InfoContainer>
                            <CategoryLabel category={post.category}></CategoryLabel>
                            <DateText date={post.date} size="16"></DateText>
                        </InfoContainer>
                </ItemContainer>
            </Container>
        </StyledWrapper>
    )
}

export default PostItem

