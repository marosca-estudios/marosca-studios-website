import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()}

  html {
    font-size: 62.5%;
  }

  *, *::after, *::before {
      box-sizing: border-box;
  }

  body {
    font-family: 'Fjalla One', sans-serif;


    font-size: 1.6rem;
    overflow: hidden;

    &, button, input, option, select, textarea {
    }
  }
`

