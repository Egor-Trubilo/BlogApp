import './App.css';
import React, {useRef, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App(props) {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript2', body: 'Description'}
    ])

const createPost = (newPost) => {setPosts([...posts, newPost])}

    const removePost = (post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    return (
        <StyledApp>
            {posts.length !== 0
                ?  <PostList remove={removePost} posts={posts} title={'список постов 1'}/>
                : <h1> Постов нет </h1> }
            <PostForm create={createPost}/>
            <Counter/>

        </StyledApp>


    )
}

export default App;
