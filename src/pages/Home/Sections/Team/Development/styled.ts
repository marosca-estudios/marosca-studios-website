import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'
import { Title } from 'styledComponents/Typography'

export const Wrap = styled.div<{

}>`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 60%;


  ul {
    text-align: left;
  }

  border-right: 1rem solid ${theme.colors.PRIMARY};

  ${mqMax.desktop} {
    justify-content: flex-start;
    width: 100%;
  }
`

export const StyledTitle = styled(Title)`
  font-size: 8rem;

  ${mqMax.desktopLarge} {
    font-size: 6rem;
  }

  ${mqMax.desktop} {
    font-size: 6rem;
  }

`
