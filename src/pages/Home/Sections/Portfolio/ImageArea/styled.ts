import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'


export const Wrap = styled.div<{

}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${mqMax.desktop} {
    width: 100%;
    min-width: unset;
    margin-top: 10rem;
  }
`

export const ImageWrap = styled.div<{

}>`
  width: 100%;

  ${mqMin.desktopExtraLarge} {
    position: absolute;
    width: 100rem;
    margin-left: 5rem;
  }
`

export const Image = styled.img<{

}>`
  display: flex;
  width: 100%;
  height: auto;
`
