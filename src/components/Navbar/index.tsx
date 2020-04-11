import React, { useState, useCallback, useEffect, useRef } from 'react'
import config from 'global/config'
import Hamburguer from 'components/Hamburguer'
import Modal from 'components/Modal'
import MainMenu from 'modals/MainMenu'
import Logo from 'styledComponents/Logo'
import {
  NavWrapper,
  Nav,
} from './styled'


const OFFSET = 1.5

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showFixedNavbar, setShowFixedNavbar] = useState<boolean>();
  const navbarRef = useRef(null);

  
  const handleScroll = useCallback(() => {
    const currentPagePosition = window.pageYOffset;
    // @ts-ignore
    const postSectionPosition = navbarRef.current.clientHeight / OFFSET;

    if (currentPagePosition >= postSectionPosition) {
      if (!showFixedNavbar) {
        setShowFixedNavbar(true)
      }
    } else {
      if (showFixedNavbar) {
        setShowFixedNavbar(false)
      }
    }
  }, [navbarRef, showFixedNavbar])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <>
      <NavWrapper ref={navbarRef}>
        <Nav isFixed={!!showFixedNavbar}>
          <Logo>
            {config.app.name.toUpperCase()}
          </Logo>
          <Hamburguer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Nav>
      </NavWrapper>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <MainMenu />
      </Modal>
    </>
  )
}

export default Navbar
