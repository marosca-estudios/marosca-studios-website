import React, { useState } from 'react'
import {
  Container,
  Bar,
} from './styled'

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Bar index={0} active={isOpen} />
      <Bar index={1} active={isOpen} />
      <Bar index={2} active={isOpen} />
    </Container>
  )
}

export default Hamburguer
