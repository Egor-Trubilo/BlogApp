import './App.css';
import React, {useEffect, useState} from 'react'
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hoks/usePosts";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";



const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);
    const [isPostLoading, setIsPostLoading] =  useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



    useEffect(()=> {
        fetchPosts()
    }, [])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    async function fetchPosts(){
        setIsPostLoading(true)
        const posts = await PostService.getAll()
       setPosts(posts)
        setIsPostLoading(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    return (
        <StyledApp>

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
            {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: "50px"}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'список постов 1'}/>
            }


        </StyledApp>


    )
}

export default App;
