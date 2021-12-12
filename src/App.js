import './App.css';
import React, {useRef, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";
import MySelect from "./Components/select/MySelect";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App(props) {

    const [posts, setPosts] = useState([
        {id: 1, title: 'trewtrwe', body: 'Description'},
        {id: 2, title: 'ffsdwew', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

const createPost = (newPost) => {setPosts([...posts, newPost])}

    const removePost = (post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))


    }

    return (
        <StyledApp>



            <PostForm create={createPost}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                    {value:'title', name: 'По названию'},
                    {value:'body', name: 'По описанию'}
                ]}
            />

            {posts.length !== 0
                ?  <PostList remove={removePost} posts={posts} title={'список постов 1'}/>
                : <h1> Постов нет </h1> }
            <Counter/>

        </StyledApp>


    )
}

export default App;
