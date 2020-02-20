import React from 'react'
import { H1 } from '../H1'
import { StyledLink } from './styled'

type Props = {
  children: React.ReactNode,
}

const Link = ({ children }: Props) => {

  return (
    <StyledLink>
      <H1 className="original">{children}</H1>
      <H1 className="overlay">{children}</H1>
    </StyledLink>
  )

}

export default Link
