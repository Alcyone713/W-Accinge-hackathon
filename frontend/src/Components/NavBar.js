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
                <li><Link to='/mainpage'>Home</Link></li>
                <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSeMpKXJVfI2X5hIIpvz23EyFVrV9-cnF_OCIOR8M7aDn7K_lg/viewform' target={"_blank"}>Donate</a></li>
                <li><Link to='/donate'>Post!!!</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSdNdGeJ1mgx6HsBo8AEj_vPv_An18tA50f3uW7kMcCKJFQr_w/viewform' target={"_blank"}>Feedback</a></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(auto, 1fr))", gridGap: "10px"}}>
           <AllPosts />
        </div>
    </div>;
}
