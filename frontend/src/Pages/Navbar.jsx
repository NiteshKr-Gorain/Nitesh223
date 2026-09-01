import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/addEvent">Add Event</Link>
        </nav>
    );
};

export default Navbar;