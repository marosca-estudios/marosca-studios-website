import styled from 'styled-components'
import theme from 'global/theme'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  background: ${theme.colors.PRIMARY};
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10rem;
  align-items: center;
  justify-content: space-evenly;
  height: 40rem;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 20rem;
`
