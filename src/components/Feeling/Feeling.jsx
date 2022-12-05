import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './Feeling.css';

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newFeeling, setNewFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: newFeeling
        });
        history.push('/Understand');
    };

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    min={1}
                    max={5}
                    type='number'
                    required='required'
                    value={newFeeling}
                    onChange={(event) => {
                        setNewFeeling(event.target.value);
                    }}
                    >
                </input>
                <br/><button className='next-btns' type='submit'>NEXT</button>
            </form>
        </div>
    )

}

export default Feeling;