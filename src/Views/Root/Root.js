import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BioView from '../BioView/BioView';
import ContactView from '../ContactView/ContactView';
import MusicView from '../MusicView/MusicView';
import HomeView from '../HomeView/HomeView';


const Root = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomeView/>}/>
          <Route exact path="/bio" element={<BioView/>}/>
          <Route exact path="/music" element={<MusicView/>}/>
          <Route exact path="/contact" element={<ContactView/>}/>
      </Routes>
    </Router>
  )
};

      
export default Root;
