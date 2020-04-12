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
export const Container = styled.div`
  background: ${theme.colors.SALMON};
`
export const ContainerWithText = styled.div`
  display: flex;
  content-align: center;
  background:  ${theme.colors.BLACK};
`

export const Content = styled.div`
`

export const Title = styled.h1`
  color:${theme.colors.SALMON};
`
export const TextAboutUs = styled.h4`
  color:${theme.colors.WHITE};
`

export const ImageAboutUs = styled.image`
  src:
`

