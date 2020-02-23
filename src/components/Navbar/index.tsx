import React, { useState } from 'react'
import config from 'global/config'
import Hamburguer from 'components/Hamburguer'
import Modal from 'components/Modal'
import MainMenu from 'modals/MainMenu'
import Logo from 'styledComponents/Logo'
import {
  NavWrapper,
  Nav,
} from './styled'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavWrapper>
        <Nav>
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
