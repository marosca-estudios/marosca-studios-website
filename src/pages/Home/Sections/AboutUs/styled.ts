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
  width: 100%;

  position: absolute;
  top: 0rem;

  background: ${theme.colors.SALMON};
` 
export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.SALMON};
`
export const ContainerWithText = styled.div`
  display: flex;
  flex: 1;
  height: 65vh;
  align-self: flex-end;
  background:  ${theme.colors.DARK};
`

export const Content = styled.div`
  width: 57%;
  margin-left: 5%;
  align-self: center;
  display: flex;
  flex-direction: column;
`

export const Title = styled.text`
  text-transform: uppercase;
  color:${theme.colors.SALMON};

`
export const TextAboutUs = styled.h3`
  line-height: 1.5;
  color:${theme.colors.WHITE};
`

export const ImageWeb = styled.img`
  height: 67vh;
  width: 54vh;
  position: relative;
  right: 4%;
  top: 17%;
`

