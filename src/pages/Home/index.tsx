import React from 'react'
import Logo from 'styledComponents/Logo'
import {
  Wrapper,
  NavWrapper,
  Nav,
} from './styled'
import HeroSection from './Sections/HeroSection'
import theme from 'global/theme'

const Home = () => {

  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <Logo>
            MAROSCA STUDIOS
          </Logo>
          <></>
        </Nav>
      </NavWrapper>
      <HeroSection />
    </Wrapper>
  )
}

export default Home
