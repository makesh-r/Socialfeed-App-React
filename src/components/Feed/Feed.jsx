/** right side feed component */

import './Feed.scss';
import '../App.scss'
// import Share from '../Share/Share';
import MainPage from './MainPage';
import BuzzPosts from './BuzzPosts'
import DraftPosts from './DraftPosts'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Share from '../Share/Share';

const Feed = () => {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share/>
            </div>
        </div>
    );
}

export default Feed;