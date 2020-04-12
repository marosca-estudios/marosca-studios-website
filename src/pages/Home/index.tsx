import React from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import HeroSection from './Sections/HeroSection'
import Services from './Sections/Services'

const Home = () => {

  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
      <Services />
    </Wrapper>
  )
}

export default Home
