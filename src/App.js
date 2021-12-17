import './App.css';
import React, {useEffect, useState} from 'react'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import styled from "styled-components";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPagesArray, getPagesCount} from "./utils/pages";
import Paginator from "./Components/UI/pagination/Pagination";


const StyledApp = styled.div`
  margin: auto;
  width: 800px;
`

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts()
    }, [page])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    const changePage = (page) => {
      setPage(page)
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
            {postError && <h1> Ошибка! ${postError}</h1>
            }
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: "50px"}}>
                    <Loader/>
                </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Мои посты'}/>
            }
<Paginator page={page} changePage={changePage} totalPages={totalPages}/>

        </StyledApp>


    )
}

export default App;
