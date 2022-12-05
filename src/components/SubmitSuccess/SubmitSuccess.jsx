import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SubmitSuccess.css';

function SubmitSuccess() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'DELETE_ANSWERS'})
        history.push('/Feeling');
    };

    return(
        <div>
            <div id='star-feedback'>
            {/* <div class="five-pointed-star"></div> */}
            <span id='star'>&#10026;</span>
            </div>
            <div>
                <h2>Great Success! Your responses have been saved!</h2>
                <form onSubmit={handleSubmit}>
                <button id='finish-btn' type='submit'>Leave New Feedback</button>
                </form>
            </div>
        </div>
    )

}

export default SubmitSuccess;