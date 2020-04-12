import styled, { css, keyframes } from 'styled-components'
import theme from 'global/theme'
import { mqMax } from 'utils/mediaQuery'

const navbarFixed = keyframes`
  from { opacity: 0; transform: translate(-50px, 0px) }
  to   { opacity: 1; transform: translate(0)}
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
  position: relative;
  
  align-items: center;

 ${(p: { isFixed: boolean }) => p.isFixed && css`
    position: fixed;
    background: ${theme.colors.DARK};
    margin: 0rem;
    padding: 1rem 2rem;

    animation: ${navbarFixed};
    animation-duration: 1s;
    animation-iteration-count: 1;

    border-bottom: .5rem solid ${theme.colors.PRIMARY};

 `};

  ${mqMax.mobile} {
    margin: 1.5rem;
    justify-content: space-around;
    align-items: center;

    ${(p: { isFixed: boolean }) => p.isFixed && css`
      margin: 0rem;
  `};
  }
`

export const NavbarActions = styled.div`
  display: flex;
  flex-direction: row;

  ${mqMax.mobile} {
    * {
      margin-left: 1rem;
    }
  }
`
