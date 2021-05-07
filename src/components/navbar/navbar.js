import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/profile"><i className="fas fa-user-circle"></i> My Profile</Link>
                </li>
                <li>
                    <Link to="/messages"><i className="fas fa-envelope"></i> Messages</Link>
                </li>
                <li>
                    <Link to="/users"><i className="fas fa-users"></i> Users</Link>
                </li>
                <li>
                    <Link to="/todo"><i className="fas fa-list-ul"></i> Todo List</Link>
                </li>
                <li>
                    <Link to="/weather"><i className="fas fa-cloud"></i> Weather</Link>
                </li>
                <li>
                    <Link to="/feed"><i className="fas fa-comment-alt"></i> Feed</Link>
                </li>
                <li>
                    <Link to="/music"><i className="fas fa-play-circle"></i> Music</Link>
                </li>
                <li>
                    <Link to="/photo-video"><i className="fas fa-image"></i> Photo | Video</Link>
                </li>
                <li>
                    <Link to="/settings"><i className="fas fa-cog"></i> Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;