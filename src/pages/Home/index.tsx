import React from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import HeroSection from './Sections/HeroSection'

const Home = () => {

  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
    </Wrapper>
  )
}

export default Home
