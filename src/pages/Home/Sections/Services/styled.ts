import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'
import img from './images/img1.jpg'

export const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
`

export const ServiceCardWrapper = styled.div`
  display: flex;
  width: 35%;
`

export const MiddleCard = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 20%;

  background: ${theme.colors.DARK};
  justify-content: center;
  align-items: center;
`

export const EmptyBar = styled.div`
  display: flex;
  background: ${theme.colors.DARK};
  height: 100%;
  width: 5%;
`
