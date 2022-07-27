import React from 'react';
import axios from 'axios';
import Universities from './components/UniversitiesMap/UniversitiesMap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsUniversities from './pages/UsUniversities';
import SearchForUniversities from './pages/SearchForUniversities';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ErrorPage from './pages/ErrorPage';

function App() {
  // axios
  //   .get('http://universities.hipolabs.com/search')
  //   .then((res) => console.log(res.data));
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/US" element={<UsUniversities />} />
        <Route path="/Search" element={<SearchForUniversities />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
