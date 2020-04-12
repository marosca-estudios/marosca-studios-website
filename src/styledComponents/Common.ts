import styled from 'styled-components'
import theme from 'global/theme'

export const StyledSection =  styled.section<{
  backgroundColor?: string,
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  position: relative;

  background: ${p => p.backgroundColor || `${theme.colors.DARK}`};

`

export const unselectable = `  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
