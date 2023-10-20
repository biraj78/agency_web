import React from 'react'
import Navbar from '../mainComponents/Navbar'

import LandingPage from './LandingPage'
import AboutSection from './AboutSection'
import WhatWeDo from './WhatWeDo'
// import MidBanner from "./MidBanner"
import Contact from './Contact'
import Footer from './Footer'


const MainPage = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <AboutSection/>
<WhatWeDo/>
{/* <MidBanner/>  */}
<Contact/>
<Footer/>

    </>
  )
}

export default MainPage