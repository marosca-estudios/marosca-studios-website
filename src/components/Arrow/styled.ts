import styled from 'styled-components'
import theme from 'global/theme'

export const Button = styled.button<{
  isActive: boolean,
  onClick: any,
}>`
  display: flex;
  width: 5rem;
  height: 5rem;
  flex-direction: column;
  border: none;
  background: none;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${theme.colors.WHITE};
    width: 3rem;
    height: 3rem;
    transform: ${(p) => p.isActive ? 'rotate(0deg)' : 'rotate(180deg)'};

    transition: 0.5s ease all;
  }

  outline: none;
`
