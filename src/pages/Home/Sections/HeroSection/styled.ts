import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'

const slogan = keyframes`
  from { opacity: 0; transform: translate(50px, 0px) }
  to   { opacity: 1; transform: translate(0)}
`
const text = keyframes`
  from { opacity: 0; transform: translate(-50px, 0px) }
  to   { opacity: 1; transform: translate(0)}
`
const background = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  position: relative;

  animation: ${background} ease 2s;
`

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  /* Desktop */
  ${mqMin.desktop} {
    position: absolute;
    left: 10rem;
    width: 60rem;
    align-items: center;
  }

  /* Mobile */
  ${mqMax.desktop} {
    padding: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const Slogan = styled.h3`
  display: inline-block;
  animation: ${slogan} 1s ease;

  /* Desktop */
  ${mqMin.desktop} {
    line-height: 10rem;
    font-size: 6rem;
    margin-bottom: 4rem;
  }

  /* Mobile */
  ${mqMax.desktop} {
    text-align: center;
    font-size: 3.8rem;
    line-height: 6rem;
    margin-bottom: 1rem;
  }
`

export const Text = styled.h4`
  animation: ${text} 1.2s ease;

  /* Desktop */
  ${mqMin.desktop} {
    margin-top: 0;
    font-size: 2.6rem;
    line-height: 4rem;
  }

  /* Mobile */
  ${mqMax.desktop} {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 0;
    line-height: 3rem;
    font-size: 1.6rem;
  }
`

export const Triangle = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;


  ${(p: { orientation?: 'top' | 'bottom'}) => !p.orientation || p.orientation === 'top'
    ? css`
      top: 0;
      background: linear-gradient(to left bottom, ${theme.colors.DARK} 25%, transparent 50%);
    `
    : css`
      bottom: 0;
      background: linear-gradient(to right top, ${theme.colors.DARK} 25%, transparent 50%);
    `
  };
`
