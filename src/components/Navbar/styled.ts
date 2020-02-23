import styled from 'styled-components'
import theme from 'global/theme'
import { mqMax } from 'utils/mediaQuery'

export const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 10rem;
  z-index: ${theme.zIndices.NAVBAR};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 5rem;

  ${mqMax.mobile} {
    margin: 1.5rem;
    justify-content: space-around;
    align-items: center;
  }
`
