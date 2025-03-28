import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
           <p> {new Date().getFullYear()} Virtual Chatbot. All rights reserved.</p> 
           <p>Tip: Our chatbot uses React Components!</p>
           <a href="https://github.com/Madhu-c07" target="_blank" rel="noopener norefferer">Checkout my Github</a> 
           <p>Contact: Chatbot@domain.com</p>

        </footer>
    );
}

export default Footer;