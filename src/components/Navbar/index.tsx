import React, { useState, useCallback, useEffect, useRef, Fragment } from 'react'
import config from 'global/config'
import Hamburguer from 'components/Hamburguer'
import Modal from 'components/Modal'
import MainMenu from 'modals/MainMenu'
import Logo from 'styledComponents/Logo'
import {
  NavWrapper,
  Nav,
  NavbarActions,
} from './styled'
import ScrollToTop from 'components/ScrollToTop'

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
        <Nav isFixed={!!showFixedNavbar} isOpen={isOpen}>
          <Logo>
            {config.app.name.toUpperCase()}
          </Logo>

          <NavbarActions>
            {!isOpen && showFixedNavbar &&
              <ScrollToTop />
            }
            <Hamburguer
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </NavbarActions>
        </Nav>
      </NavWrapper>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <MainMenu onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default Navbar
