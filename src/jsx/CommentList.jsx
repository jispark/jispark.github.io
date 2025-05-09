import styled from 'styled-components'
import CommentItem from './CommentItem'

const StyledWrapper = styled.div``

function CommentList(props){
    const {comments} = props

    const list = comments.map((comment, index)=>{
        return <CommentItem key={comment.id} comment={comment}></CommentItem>
    })

    return (
        <StyledWrapper>
            {list}
        </StyledWrapper>
    )
}

export default CommentList