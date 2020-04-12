import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'

export const Wrap = styled.div<{

}>`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100%;

  ul {
    text-align: left;
  }
  margin: 2rem;


  ${mqMax.desktop} {
    width: 100%;
    height: 100%;
    min-width: unset;
    margin: 0;
    margin-bottom: 5rem;
    padding: 2rem;
    text-align: center;

    justify-content: center;

    ul {
      text-align: center;
      align-items: center;
    }
  }

  ${mqMin.desktopExtraLarge} {
    margin-left: 15rem;
  }

`

export const Text = styled.p<{
  textColor?: string,
  fontSize?: number,
}>`
  color: ${p => p.textColor || theme.colors.WHITE};
  font-size: ${p => `${p.fontSize || 4}rem`};

  ${mqMax.desktop} {
    font-weigth: 200;
    font-size: ${p => `${(p.fontSize || 4) - 0.5}rem`};

  }
`

export const LinkSection = styled.div<{}>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${mqMax.desktop} {
    justify-content: center;
  }
`

export const ButtonLink = styled.button<{
}>`
  cursor: pointer;
  border: none;
  min-width: 5rem;
  min-height: 5rem;

  svg {
    fill: ${theme.colors.DARK};
    width: 5rem;
    height: 5rem;
  }
`
