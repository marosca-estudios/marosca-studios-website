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

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  align-items:  flex-end;

  justify-content: center;
` 

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-wrap: wrap;
`
