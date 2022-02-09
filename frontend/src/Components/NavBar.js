import React from 'react';
import { Link } from 'react-router-dom';
import AllPosts from './AllPosts';
import './navbar.css';

export default function NavBar() {
    return <div>
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn"><span></span></label>
        <label for="active" class="close"></label>
        <div class="wrapper">
            <ul>
                <li><Link to='mainpage'>Home</Link></li>
                <li><Link to='mainpage'>Profile</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
                <li><Link to='mainpage'>About</Link></li>
                <li><Link to='mainpage'>Feedback</Link></li>
            </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(auto, 1fr))", gridGap: "10px"}}>
           <AllPosts />
        </div>
    </div>;
}
