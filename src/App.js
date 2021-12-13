import './App.css';
import React, {useRef, useState} from 'react'
import Counter from "./Components/Counter";
import PostList from "./Components/PostList";

import PostForm from "./Components/PostForm";
import styled from "styled-components";
import MySelect from "./Components/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";


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
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {

        if (selectedSort) {
            return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }

    const sortedPosts = getSortedPosts()

const createPost = (newPost) => {setPosts([...posts, newPost])}

    const removePost = (post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)



    }

    return (
        <StyledApp>



            <PostForm create={createPost}/>
            <MyInput
                value={searchQuery}
                onChange={e=> setSearchQuery(e.target.value)}
            placeholder='Поиск...'/>
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
                ?  <PostList remove={removePost} posts={sortedPosts} title={'список постов 1'}/>
                : <h1> Постов нет </h1> }
            <Counter/>

        </StyledApp>


    )
}

export default App;
