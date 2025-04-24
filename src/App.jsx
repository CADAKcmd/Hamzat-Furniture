import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import LetTalk from './Pages/LetTalk';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/LetTalk' element={<LetTalk/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
