import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Hero from './Hero'
import Add from './Add'
import Footer from './Footer'
import Services from './Services'
import './Home.css'
import Description from './Description'

function Home() {
  return (
    <div className='home'>
        {/* <Navbar/> */}
        {/* home */}
        <Hero/>
        <Description/>
        <Add/>
        <Services/>
        {/* <Footer/> */}
        {/* <Description/>
        <Add/>
        <Services/>
        <Footer/> */}
    </div>
  )
}

export default Home