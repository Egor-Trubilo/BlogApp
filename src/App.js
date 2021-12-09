import './App.css';
import React, {useRef, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import styled from "styled-components";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App() {
    const [posts, setPost] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript2', body: 'Description'}
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(), title, body
        }
        setPost([...posts, newPost])
    };

    return (
        <StyledApp>
            <form>
                <MyInput onChange={e => setTitle(e.target.value)}
                         value={title}
                         type="text"
                         placeholder='Название постов'/>
                <MyInput
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    ref={bodyInputRef}
                    type="text"
                    placeholder='Описание поста'/>
                <MyButton onClick={addNewPost}>Add post</MyButton>
            </form>
            <Counter/>
            <PostList posts={posts} title={'список постов 1'}/>


        </StyledApp>

    )
}

export default App;
