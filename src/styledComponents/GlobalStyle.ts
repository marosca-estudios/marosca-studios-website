import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import theme from 'global/theme'

export default createGlobalStyle`
  ${normalize()}

  ::selection {
    background: ${theme.colors.PRIMARY}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${theme.colors.PRIMARY}; /* WebKit/Blink Browsers */
  }

  html {
    font-size: 62.5%;
  }

  *, *::after, *::before {
      box-sizing: border-box;
  }

  body {
    background: ${theme.colors.DARK};
    color: ${theme.colors.WHITE};

    font-family: 'Fjalla One', sans-serif;

    overflow-x: hidden;

    font-size: 1.6rem;
  }
`
