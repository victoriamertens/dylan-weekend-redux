import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import axios from 'axios';
import './Review.css';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    // will need to useSelector here to grab items from the store and display them in the review page

    const answers = useSelector(store => store.answers);
    console.log('User info: ', answers);
    console.log('what answers.feelingAnswer should be: ', answers.feelingAnswer);


    const handleSubmit = (event) => {
        event.preventDefault();
        // const sendData = {
        //     feeling: answers.feelingAnswer,
        //     understanding: answers.understandAnswer,
        //     support: answers.supportAnswer,
        //     comments: answers.commentAnswer,
        // }

        //having issues when the input fields are blank throwing errors, want to make sure it will only axios.post 
        // if there are answers ready
        // had to not include the answers.commentAnswer to allow for it not to need that comment data blank
        if (answers.feelingAnswer && answers.understandAnswer && answers.supportAnswer){
                console.log('Answers prepared for database');
            axios.post('./answers', answers)
            .then(response => {
                console.log('Post Successful');
                history.push('/SubmitSuccess');
            })
            .catch(err => {console.log('Failed to Post: ', err)})
        }
    };

    return(
        <div>
            <h2>Review Your Feedback</h2>
                <p>Feeling: {answers.feelingAnswer}</p>
                <p>Understanding: {answers.understandAnswer}</p>
                <p>Support: {answers.supportAnswer}</p>
                <p>Comment: {answers.commentAnswer}</p>
            <form onSubmit={handleSubmit}>
                <button id='review-btn' type='submit'>SUBMIT</button>
            </form>
        </div>
    )

}

export default Review;