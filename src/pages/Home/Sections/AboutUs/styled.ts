import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'
import img from './images/img1.jpg'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  position: relative;
`

export const TopBar = styled.div`
  display: flex;
  height: 10%;
  width: 100%;

  position: absolute;
  top: 0rem;

  background: ${theme.colors.SALMON};
` 
