import './App.css';
import React, {useMemo, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";
import MySelect from "./Components/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";
import PostFilter from "./Components/PostFilter";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App(props) {

    const [posts, setPosts] = useState([
        {id: 1, title: 'trewtrwe', body: 'Description'},
        {id: 2, title: 'ffsdwew', body: 'Description'}
    ])


const [filter, setFilter] = useState({sort: '', query: '',})


    const sortedPosts = useMemo(()=>{
        if (filter.sort) {
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

const createPost = (newPost) => {setPosts([...posts, newPost])}

    const removePost = (post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    return (
        <StyledApp>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostForm create={createPost}/>
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'список постов 1'}/>


        </StyledApp>


    )
}

export default App;
