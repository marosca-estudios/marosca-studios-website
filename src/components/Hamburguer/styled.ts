import styled, { css } from 'styled-components'
import theme from 'global/theme'

export const Container = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  background: none;
  height: 5rem;
  outline: none;
  z-index: ${theme.zIndices.ABOVE_MODAL};
`

const getAnimation = (index: number) => {
  switch (index) {
    case 0:
      return css`
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      `
    case 1:
      return css`
        opacity: 0;
      `
    case 2:
      return css`
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      `
    default:
      return
  }
}

type P = {
  active: boolean,
  index: number,
}

export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${theme.colors.WHITE};

  margin: 6px 0;

  transition: 0.4s;

  ${(p: P) => p.active && getAnimation(p.index)};
`
