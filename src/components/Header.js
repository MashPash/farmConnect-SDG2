import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ backgroundColor: '#4CAF50', padding: '10px' }}>
            <h1 style={{ color: 'white' }}>FarmConnect</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}

export default Header;
