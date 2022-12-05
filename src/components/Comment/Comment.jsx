import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './Comment.css';

function Comment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    //now I'm about to use get useDispatch for each component thats sending data to the store.
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        history.push('/Review');
    };

    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    id='comment-input'
                    type='text'
                    value={newComment}
                    onChange={(event) => {
                        setNewComment(event.target.value);
                    }}
                    >
                </input>
                <br/><button className='next-btns' type='submit'>NEXT</button>
            </form>
        </div>
    )

}

export default Comment;