import './App.css'
import React from 'react'
import Button from "@mui/material/Button"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Presentation from './Components/Presentation'
import Slider from './Components/Slider'
import Video from './Components/Video'
import WorkPage from './Components/workPage'
import BombArea from './Components/BombArea'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      
      <Navbar/>
      <Hero/>
      <Presentation/> 
      <Slider/>
      <Video/>
      <WorkPage/>
      <BombArea/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
