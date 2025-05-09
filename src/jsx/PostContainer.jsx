import styled from 'styled-components'

import TitleText from './TitleText'
import ContentText from './ContentText'
import CategoryLabel from './CategoryLabel'
import DateText from './DateText'

const StyledWrapper = styled.div`
    display: block;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`

function PostContainer(props){
    // post: 글 데이터
    const {post} = props

    return (
        <StyledWrapper>
            <TitleText title={post.title} size="28" bottom="30"></TitleText>
            <ContentText content={post.content} size="18" line="160" bottom="45"></ContentText>

            <Container>
                <CategoryLabel category={post.category}></CategoryLabel>
                <DateText date={post.date} size="18"></DateText>
            </Container>
        </StyledWrapper>
    )
}

export default PostContainer

