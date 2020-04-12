import styled, { css } from 'styled-components'
import theme from 'global/theme'
import { MouseEventHandler } from 'react'
import { unselectable } from 'styledComponents/Common'

type WrapProps = {
  isActive: boolean,
  onMouseEnter?: MouseEventHandler<any>,
  onMouseLeave?: MouseEventHandler<any>,
  onClick?: MouseEventHandler<any>,
}

export const Wrap = styled.div<WrapProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: center;
  align-items: center;

  height: 10rem;
  width: 10rem;
  margin: 0 1rem;
  border: none;

  padding: 0.5rem;

  svg {
    fill: ${theme.colors.DARK};
    width: 100%;
    height: 100%;
  }

  ${(p) => p.isActive && css`
    background: ${theme.colors.PRIMARY};
    svg {
      opacity: 0;
      position: absolute;
      transition: 0.5s ease all;
    }
  `};

  outline: none;
  transition: 0.5s ease all;

`

export const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  min-width: 10rem;

  ${unselectable};
`

