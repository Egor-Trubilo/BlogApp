import React from 'react';
import styled from "styled-components";
import MyButton from "./UI/button/MyButton";


const StyledCard = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  #root {
    display: flex;
    justify-content: space-between;
  }

  .app {
    width: 800px;
    margin: auto;

  }

  .post {

    display: flex;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }
`


const PostItem = (props) => {
    return (
        <div>
            <StyledCard>
                <div className={'app'}>
                    <div className={'post'}>
                        <div className={'post__content'}>
                            <strong>{props.number}.{props.post.title}</strong>
                            <div> {props.post.body}</div>
                        </div>
                        <div className={'post__btns'}>
                            <MyButton onClick={() =>props.remove(props.post)}>Delete</MyButton>
                        </div>

                    </div>

                </div>

            </StyledCard>
        </div>
    );
};

export default PostItem;
