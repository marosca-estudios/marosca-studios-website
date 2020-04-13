import styled from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import bg from './bg.jpg'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  ${mqMin.desktop} {
    background: url(${bg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

export const EmptyArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`
