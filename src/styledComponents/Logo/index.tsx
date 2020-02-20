import React from 'react'
import { Link, H1 } from './styled'

type Props = {
  children: React.ReactNode,
}

const Logo = ({ children }: Props) => {
  return (
    <Link>
      <H1 className="original">{children}</H1>
      <H1 className="overlay">{children}</H1>
    </Link>
  )

}

export default Logo
