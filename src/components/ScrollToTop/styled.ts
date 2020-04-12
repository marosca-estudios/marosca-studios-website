import styled from 'styled-components'
import theme from 'global/theme'

export const ScrollWrapper = styled.button`
  border: none;
  background: none;

  min-width: 5rem;

  cursor: pointer;
  outline: none;

  svg {
    fill: ${theme.colors.WHITE};
    width: 3rem;
    height: 3rem;
  }
`
