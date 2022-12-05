import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// ~~~~~~~~~~ COMPONENTS ~~~~~~~~~~~
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it! or else...</h4>
      </header>


      <Router>
      {/* <nav>
          <ul>
            <li>
              <Link to="/Feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/Understand">Understand</Link>
            </li>
            <li>
              <Link to="/Support">Support</Link>
            </li>
            <li>
              <Link to="/Comment">Comment</Link>
            </li>
            <li>
              <Link to="/Review">Review</Link>
            </li>
            <li>
              <Link to="/SubmitSuccess">SubmitSuccess</Link>
            </li>
          </ul>
        </nav> */}

        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/Feeling">
          <Feeling />
        </Route>
        <Route exact path="/Understand">
          <Understand />
        </Route>
        <Route exact path="/Support">
          <Support />
        </Route>
        <Route exact path="/Comment">
          <Comment />
        </Route>
        <Route exact path="/Review">
          <Review />
        </Route>
        <Route exact path="/SubmitSuccess">
          <SubmitSuccess />
        </Route>
      </Router>
    </div>
  );
}

export default App;
