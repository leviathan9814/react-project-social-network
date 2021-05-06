import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div>
                <Link to="/profile">My Profile</Link>
            </div>
            <div>
                <Link to="/messages">Messages</Link>
            </div>
            <div>
                <Link to="/users">Users</Link>
            </div>
            <div>
                <Link to="/todo">Todo List</Link>
            </div>
            <div>
                <Link to="/weather">Weather</Link>
            </div>
        </nav>
    )
}

export default Navbar;