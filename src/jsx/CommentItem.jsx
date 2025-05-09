import styled from 'styled-components'

import Profile from './Profile'
import UserName from './UserName'
import Content from './Content'

const StyledWrapper = styled.div`
    display: block;
    width: 1162px;
    border: 1px solid #CBCBCB;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 13px 20px 13px 20px;
`

const StyledComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    line-height: 150%;
`

const Contents = styled.div`
    margin-left: 15px;
    width: 1030px;
`

function CommentItem(props){
    // comment: 댓글 데이터
    const {comment} = props

    return (
        <StyledWrapper>
            <StyledComment>
                <Profile></Profile>
                <Contents>
                    <UserName name="@dujs_b"></UserName>
                    <Content content={comment.content}></Content>
                </Contents>
            </StyledComment>
        </StyledWrapper>
    )
}

export default CommentItem

