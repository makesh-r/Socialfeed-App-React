import './components/App.scss';
import Feed from './components/Feed/Feed';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import React, { useState } from 'react';
import Home from './components/Feed/Home';
import BuzzPosts from './components/Feed/BuzzPosts';
import DraftPosts from './components/Feed/DraftPosts';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Share from './components/Share/Share';

function App() {

  const [tog, setTog] = useState(true);
  const [ham, setHam] = useState('hamno');
  const showHam = () => {
    if (tog) {
      setHam("hamyes");
      setTog(!tog);
    }
    else {
      setHam("hamno");
      setTog(!tog);
    }
  }

  return (
    <>
      <TopBar showHam={showHam} />
      <BrowserRouter>
      <SideBar side={ham} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/buzhome' element={<Feed />} />
          <Route path='/buzz' element={<BuzzPosts />} />
          <Route path='/draft' element={<DraftPosts />} />
        </Routes>
      </BrowserRouter>
      {/* <Feed/> */}
    </>
  );
}

export default App;
