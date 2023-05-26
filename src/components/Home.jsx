import React from 'react'
import HomeComponent from "./HomeComponent"
import Service from "./Service"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import BuyCar from './BuyCar'
const Home = () => {
  return (
    <>
      <HomeComponent/>
      <BuyCar/>
       <Service/>
      <About/>
      <Gallery/>
      <Contact/>
     
    </>
  )
}

export default Home
