import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/todo">Todo List</Link>
                </li>
                <li>
                <Link to="/weather">Weather</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;