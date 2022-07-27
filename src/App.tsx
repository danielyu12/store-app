import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsUniversities from './pages/UsUniversities/UsUniversities';
import SearchForUniversities from './pages/SearchForUniversities/SearchForUniversities';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
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
