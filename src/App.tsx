import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Home from './pages/Home';
import Bio from './pages/Bio';
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Audioshire from "./pages/Audioshire";
import Interests from "./pages/Interests";

import './App.css';

const Application: React.FunctionComponent = (props) => {
  useEffect(() => {
    console.log('Application Component Rerender')
  }, [])
  return (
   <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='bio' element={<Bio />} />
      <Route path='career' element={<Career />} />
      <Route path='contactme' element={<Contact />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='audioshire' element={<Audioshire />} />
      <Route path='interests' element={<Interests />} />
    </Routes>
   </BrowserRouter>
  );
}

export default Application;
