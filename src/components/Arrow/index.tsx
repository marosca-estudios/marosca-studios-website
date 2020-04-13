import React from 'react'
import ArrowIcon from 'assets/icons/arrow'
import { Button } from './styled'

type Props = {
  isActive: boolean,
  handleClick: () => void,
}

const Arrow = ({ isActive, handleClick }: Props) => (
  <Button isActive={isActive} onClick={handleClick} >
    <ArrowIcon  />
  </Button>  
)

export default Arrow
