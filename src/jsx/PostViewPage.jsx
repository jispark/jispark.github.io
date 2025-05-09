import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

import Button from './Button.jsx'
import Header from './Header.jsx'
import TextInput from './TextInput.jsx'
import PostContainer from './PostContainer.jsx'
import CommentList from './CommentList.jsx'
import {db} from '../firebase.js'

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainContainer = styled.div`
    width: 1160px;
    margin-top: 140px;
`
const Buttons = styled.div`
    display: flex;
    justify-content: right;
    gap: 15px;
    margin-bottom: 30px;
`

const CommentBox = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 10px;
`

const CommentCount = styled.h2`
    font-size: 22px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 25px;
`

function PostViewPage(props){
    const postId = useParams().id
    const navigate = useNavigate();

    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        date: '',
        category: '',
        image: null,
    comments: []
    })

    useEffect( ()=>{
        db.collection('post').doc(postId).get().then((doc)=>{
            setPost(doc.data())
        })
    }, [])

    const [comment, setComment] = useState('')

    const writeComment = ()=>{
        let timestamp = new Date().getTime().toString()
        let tempComments = post.comments
        tempComments.push({
            id: `${postId}_${timestamp}`,
            content: comment
        })

        db.collection('post').doc(postId).update({
            comments: tempComments
        }).then(()=>{
            alert('댓글이 등록되었습니다.')
            setComment('')
        })
    }

    const writeDelete = ()=>{
        db.collection('post').doc(postId).delete({
        }).then(()=>{
            alert('게시글이 삭제되었습니다.')
            navigate('/')
        })
    }

    return (
        <div>
            <Header></Header>

            <Main>
                <MainContainer>
                    <Buttons>
                        <Button type="outline" color="gray" title="뒤로가기" onClick={(e)=>{navigate('/')}}></Button>
                        <Button title="삭제하기" onClick={(e)=>{writeDelete()}}></Button>
                    </Buttons>

                    <PostContainer post={post}></PostContainer>
                    <CommentCount>댓글 {post.comments.length}개</CommentCount>
                    <CommentList comments={post.comments}></CommentList>

                    <CommentBox>
                        <TextInput text='댓글을 입력하세요.' height="60" width="1018" value={comment} onChange={(e)=>{setComment(e.target.value)}}></TextInput>
                        <Button title="댓글 작성" height="60" radius="10" onClick={(e)=>{writeComment()}}></Button>
                    </CommentBox>
                </MainContainer>
            </Main>
        </div>
    )
}

export default PostViewPage