import React, { useState, useCallback } from 'react'
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

type Props = {
  onClose?: () => void,
}

const MainMenu = ({ onClose }: Props) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  return (
    <Container>
      <StyledUl>
        {links.map(link =>
          <StyledLi>
            <Link href={link.href} onClick={handleClose}>{link.name}</Link>
          </StyledLi>
        )}
      </StyledUl>
    </Container>
  )
}

export default MainMenu
