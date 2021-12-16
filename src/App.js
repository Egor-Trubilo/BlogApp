import './App.css';
import React, {useMemo, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";
import MySelect from "./Components/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hoks/usePosts";
import {queryByTestId} from "@testing-library/react";
import axios from "axios";
import async from "async";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    async function fetchPosts(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
       setPosts(response.data)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    return (
        <StyledApp>
            <button onClick={fetchPosts}>Get Post</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>


            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'список постов 1'}/>


        </StyledApp>


    )
}

export default App;
