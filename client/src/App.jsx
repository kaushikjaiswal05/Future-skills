import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HelpSection from './components/HelpSection/HelpSection';
import Footer from './components/Footer/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <>
      <Navbar />
      <Header onSearch={handleSearch} />
      <HelpSection searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default App;
