import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChatbotBody from './components/ChatbotBody';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
return (
<div className="App">
<Header />
<Routes>
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/" element={<ChatbotBody />} />
</Routes>
<Footer/>
</div>
);
}
export default App; 
