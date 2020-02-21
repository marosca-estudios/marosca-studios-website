import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

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
`

