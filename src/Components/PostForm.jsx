import React, {useRef, useState} from 'react';
import styled from "styled-components";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import Counter from "./Counter";
import PostList from "./PostList";



const PostForm = ({create}) => {


    const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()
       const newPost ={...post, id:Date.now()}
        create(newPost)
        setPost({title:'', body:''})
    };

    const [post, setPost] = useState({title:'', body:''})

    return (

                <form>
                    <MyInput onChange={e => setPost({...post ,title: e.target.value})}
                             value={post.title}
                             type="text"
                             placeholder='Название постов'/>
                    <MyInput
                        onChange={e => setPost({...post ,body: e.target.value})}
                        value={post.body}
                        ref={bodyInputRef}
                        type="text"
                        placeholder='Описание поста'/>
                    <MyButton onClick={addNewPost}>Add post</MyButton>
                </form>





    );
};

export default PostForm;
