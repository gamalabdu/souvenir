import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Enter from './components/Enter/Enter';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Ahn from './components/Pages/Ahn/Ahn';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <div className="App">


      <BrowserRouter >

      <AnimatePresence mode='wait'>

          <Routes>

            <Route path='/' element={ <Enter />} />

            <Route element={ <Main/> }>

              <Route path='/home' element={ <Home/> } />

              <Route path='/about' element={ <About/> } />

              <Route path='/ahn' element={ <Ahn/> } />

            </Route>

          </Routes>
      
        </AnimatePresence>

      </BrowserRouter>

    </div>
  );
}

export default App;
