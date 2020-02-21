import React from 'react'
import config from 'global/config'
import MediaQuery from 'components/MediaQuery'

type Props = {
  children: React.ReactNode,
  breakpoint?: number,
}

const Mobile = ({
  children,
  breakpoint = config.breakpoints.desktop,
}: Props) =>
  <MediaQuery breakpoint={breakpoint}>
    {matches => matches && children}
  </MediaQuery>

export default Mobile
