import React, { useState } from 'react'
import {
  Container,
  StyledUl,
  StyledLi,
  Link,
} from './styled'

const links = [
  {
    name: 'ABOUT US',
    href: '#aboutus'
  },
  {
    name: 'SERVICES',
    href: '#services'
  },
  {
    name: 'PORTFOLIO',
    href: '#portfolio'
  },
  {
    name: 'CONTACT',
    href: '#contact'
  },
]

const MainMenu = () => (
  <Container>
    <StyledUl>
      {links.map(link =>
        <StyledLi>
          <Link href={link.href}>{link.name}</Link>
        </StyledLi>
      )}
    </StyledUl>
  </Container>
)

export default MainMenu
