import styled from "styled-components"
import PostItem from './PostItem.jsx'

function PostList(props){
    const {posts, itemClicked} = props

    const List  = posts.map((post, index)=>{
        return <PostItem key={post.id} post={post} onClick={(e)=>{itemClicked(post)}} />
    })

    return(List)
}

export default PostList