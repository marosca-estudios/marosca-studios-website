import React from 'react'
import {
  Container,
  Bar,
} from './styled'

type Props = {
  isOpen: boolean,
  setIsOpen: (v: boolean) => void,
}

const Hamburguer = ({ isOpen, setIsOpen }: Props) => (
  <Container onClick={() => setIsOpen(!isOpen)}>
    <Bar index={0} active={isOpen} />
    <Bar index={1} active={isOpen} />
    <Bar index={2} active={isOpen} />
  </Container>
)

export default Hamburguer
