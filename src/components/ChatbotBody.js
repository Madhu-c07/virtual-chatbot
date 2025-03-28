import React from 'react';

function ChatbotBody() {
    return(
        <main>
            <h2>Chat with your Virtual Assistant</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="username" placeholder="Enter your name"/>
                </label>
                <br /><br />
                <label>
                    <h3>Welcome! Ask me anything</h3>
                    Message:
                    <textarea name="message" placeholder="Type your message here..."></textarea>
                </label>
                <br /><br />
                <button type="button">Send</button>
            </form>
        </main>
    );
}


export default ChatbotBody;