import React from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import HeroSection from './Sections/HeroSection'
import AboutUs from './Sections/AboutUs'

const Home = () => {

  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </Wrapper>
  )
}

export default Home
