import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/profile"><i class="far fa-user-circle"></i> My Profile</Link>
                </li>
                <li>
                    <Link to="/messages"><i class="far fa-comment"></i> Messages</Link>
                </li>
                <li>
                    <Link to="/users"><i class="fas fa-users"></i> Users</Link>
                </li>
                <li>
                    <Link to="/todo"><i class="fas fa-list-ul"></i> Todo List</Link>
                </li>
                <li>
                <Link to="/weather"><i class="fas fa-cloud"></i> Weather</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;