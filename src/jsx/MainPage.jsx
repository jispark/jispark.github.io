import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

import PageName from './PageName.jsx'
import Button from './Button.jsx'
import PostList from './PostList.jsx'
import Header from './Header.jsx'
import Category from './Category.jsx'

import {db} from '../firebase.js'

function MainPage(props){
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const loadedData = useRef([]);
    const [sequence, setSequence] = useState('recent')
    const [type, setType] = useState('all')

    useEffect(()=>{
        db.collection('post').get().then((qs)=>{
            qs.forEach((doc)=>{
                loadedData.current.push(doc.data())
            })
            loadedData.current = loadedData.current.sort((a, b)=> b.id-a.id)
            setData(loadedData.current)
        } )
    }, [])//빈 의존성 배열 사용 필수

    useEffect(() => {
        let SlicedData = loadedData.current.slice();

        if (sequence === 'latest') {
            SlicedData.sort((a, b) => a.id-b.id);
        } else if (sequence === 'recent') {
            SlicedData.sort((a, b) => b.id-a.id);
        }

        if (type !== 'all') {
            SlicedData = SlicedData.filter(post => post.category === type);
        }

        setData(SlicedData);
    }, [sequence, type]);



    return (
        <div>
            <Header></Header>

            <div className='main-page'>
                <div className='main-container'>
                    <PageName title="추억이 담긴 물건을 정리해볼까요?" bottom="40"></PageName>
                    
                    <div className='main-buttons'>
                        <div className='categorys'>
                            <Category value={sequence}  onChange={(e)=>{setSequence(e.target.value)}}>
                                <option value="recent">최신 순</option>
                                <option value="latest">오래된 순</option>
                            </Category>
                            <Category value={type}  onChange={(e)=>{setType(e.target.value)}}>
                                <option value="all">전체</option>
                                <option value="인형">인형</option>
                                <option value="굿즈">굿즈</option>
                                <option value="편지">편지</option>
                                <option value="악기">악기</option>
                                <option value="가구">가구</option>
                                <option value="책">책</option>
                                <option value="옷">옷</option>
                                <option value="etc">etc</option>
                            </Category>
                        </div>
                        <Button title="글 작성" onClick={(e)=>{navigate(`/write`)}}></Button>
                    </div>
                    
                    <PostList posts={data} itemClicked={(post)=>{navigate(`/post/${post.id}`)}}></PostList>
                </div>
            </div>
        </div>
    )
}

export default MainPage