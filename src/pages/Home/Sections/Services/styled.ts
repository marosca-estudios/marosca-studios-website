import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'

export const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;

  ${mqMax.desktopLarge} {
    flex-direction: column;
  }
`

export const ServiceCardWrapper = styled.div`
  display: flex;
  width: 35%;

  ${mqMax.desktopLarge} {
    width: 100%;
  }
`

export const MiddleCard = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 20%;

  background: ${theme.colors.DARK};
  justify-content: center;
  align-items: center;

  ${mqMax.desktopLarge} {
    width: 100%;
    height: 100%;
    min-height: 60rem;
  }
`

export const EmptyBar = styled.div`
  display: flex;
  background: ${theme.colors.DARK};
  height: 100%;
  width: 5%;

  ${mqMax.desktopLarge} {
    display: none;
  }
`
