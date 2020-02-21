import React from 'react'
import ReactMediaQuery from 'react-responsive'

type Props = {
  children: (v: boolean) => React.ReactNode,
  breakpoint: number,
}

const MediaQuery = ({ breakpoint, children }: Props) => (
  <ReactMediaQuery minWidth={breakpoint}>
    {(valueMatches: boolean) => children(!valueMatches)}
  </ReactMediaQuery>
)

export default MediaQuery
