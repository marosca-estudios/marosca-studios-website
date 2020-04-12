import React from 'react'
import { MoonLoader } from 'react-spinners'
import theme from 'global/theme'
import { Wrap } from './styled'

const Loader = () => (
  <Wrap>
    <MoonLoader color={theme.colors.PRIMARY} />
  </Wrap>
)

export default Loader
