import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(5);
    const increment = () => {
        setLikes(likes+1)
    }


    const decrement = () => {
        setLikes(likes-1)
    }
    return (

        <div>
            <h1>{likes}</h1>
            <button onClick={decrement}> Dislike </button>
            <button onClick={increment}>Like</button>
        </div>
    );

};

export default Counter;

