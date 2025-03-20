import React from 'react';
import './Header.css';

function Header() {
    return (
    <header>
        <h1>My Awesome Virtual Chatbot</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
        <button onClick={() => alert('Hello from the Header!')}></button>
    </header>
);
}

export default Header;