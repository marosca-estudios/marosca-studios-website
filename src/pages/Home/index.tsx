import React from 'react'
import theme from 'global/theme'
import config from 'global/config'
import Hamburguer from 'components/Hamburguer'
import Logo from 'styledComponents/Logo'
import {
  Wrapper,
  NavWrapper,
  Nav,
} from './styled'
import HeroSection from './Sections/HeroSection'

const Home = () => {

  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <Logo>
            {config.app.name.toUpperCase()}
          </Logo>
          <Hamburguer />
        </Nav>
      </NavWrapper>
      <HeroSection />
    </Wrapper>
  )
}

export default Home
