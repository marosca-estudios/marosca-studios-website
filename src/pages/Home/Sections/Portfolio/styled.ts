import styled from 'styled-components'
import { mqMax } from 'utils/mediaQuery'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  ${mqMax.desktop} {
    flex-direction: column;
  }
`
