import React from 'react'
import Logo from 'styledComponents/Logo'
import {
  Wrapper,
  NavWrapper,
  Nav,
} from './styled'
import HeroSection from './Sections/HeroSection'
import theme from 'global/theme'
import config from 'global/config'

const Home = () => {

  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <Logo>
            {config.app.name.toUpperCase()}
          </Logo>
          <></>
        </Nav>
      </NavWrapper>
      <HeroSection />
    </Wrapper>
  )
}

export default Home
