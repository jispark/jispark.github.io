import { useState } from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import PageName from "./PageName.jsx";
import WriteTitle from "./WriteTitle.jsx";
import Button from './Button.jsx'
import CategoryButton from './CategoryButton.jsx'
import Header from './Header.jsx'
import TextInput from './TextInput.jsx'
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

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: right;
    gap: 15px;
`

const Categorys = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
    margin-bottom: 30px;
`

const StyledImageInputArea = styled.div`
    width: 150px;
    height: 150px;
    border: ${props => props.imagePreview ? 'none' : '2px dashed #CBCBCB'};
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    background-image: ${props => props.imagePreview ? `url(${props.imagePreview})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img { 
    width: 24px; 
    height: 24px; 
    opacity: ${props => props.imagePreview ? 0 : 1};
    }
`

const FileInputWrapperLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    margin-bottom: 30px;
`

function PostWritePage(props){
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('인형')

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const writePost = ()=>{
        let timestamp = new Date().getTime().toString()

        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
    
        const formattedDate = `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;

        db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            date: formattedDate,
            category: category,
            image: image,
            comments: []
        }).then(()=>{
            alert('글이 등록되었습니다.')
            navigate('/')
        })
    }

    const [image, setImage] = useState(null)

    const handleImage = (e)=>{
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (_e)=>{
            console.log(_e.target.result)
            setImage(_e.target.result)
        }
    }

    return (
        <div>
            <Header></Header>

            <Main>
                <MainContainer>
                    <Container>
                        <PageName title="글 작성하기"></PageName>
                        <Buttons>
                            <Button type="outline" color="gray" title="뒤로가기" onClick={(e)=>{navigate('/')}} />
                            <Button color="green" title="저장하기" onClick={(e)=>{writePost()}} />
                        </Buttons>
                    </Container>
                    
                    <div>
                    <WriteTitle title="대표 이미지"></WriteTitle>
                    <FileInputWrapperLabel>
                        <input type="file" accept='image/*' onChange={handleImage} style={{ display: 'none' }} />
                        <StyledImageInputArea imagePreview={image}>
                                {!image && <img src="/image-add.png"/> }
                        </StyledImageInputArea>
                    </FileInputWrapperLabel>

                    <WriteTitle title="제목"></WriteTitle>
                    <TextInput text="제목을 입력하세요." height="60" width="1160" value={title} 
                    onChange={(e)=>{setTitle(e.target.value)}}></TextInput>
                    
                    <WriteTitle title="내용"></WriteTitle>
                    <TextInput text="내용을 입력하세요." height="160" value={content} 
                    onChange={(e)=>{setContent(e.target.value)}}></TextInput>
                    
                    <WriteTitle title="카테고리"></WriteTitle>
                    <Categorys>
                        <CategoryButton title='인형' onClick={() => handleCategoryClick('인형')}
                            isSelected={category === '인형'}>인형</CategoryButton>
                        <CategoryButton title='굿즈' onClick={() => handleCategoryClick('굿즈')}
                            isSelected={category === '굿즈'}>굿즈</CategoryButton>
                        <CategoryButton title='편지' onClick={() => handleCategoryClick('편지')}
                            isSelected={category === '편지'}>편지</CategoryButton>
                        <CategoryButton title='악기' onClick={() => handleCategoryClick('악기')}
                            isSelected={category === '악기'}>악기</CategoryButton>
                        <CategoryButton title='가구' onClick={() => handleCategoryClick('가구')}
                            isSelected={category === '가구'}>가구</CategoryButton>
                        <CategoryButton title='책' onClick={() => handleCategoryClick('책')}
                            isSelected={category === '책'}>책</CategoryButton>
                        <CategoryButton title='옷' onClick={() => handleCategoryClick('옷')}
                            isSelected={category === '옷'}>옷</CategoryButton>
                        <CategoryButton title='etc' onClick={() => handleCategoryClick('etc')}
                            isSelected={category === 'etc'}>etc</CategoryButton>
                    </Categorys>
                    </div>
                </MainContainer>
            </Main>
        </div>
    )
}

export default PostWritePage