import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const FONT_FAMILY_URL = ``

export default createGlobalStyle`
  ${normalize()}

  @import url(${FONT_FAMILY_URL});

  html {
      font-size: 62.5%;
  }

  *, *::after, *::before {
      box-sizing: border-box;
  }

  body {
      font-size: 1.6rem;
      overflow: hidden;

      &, button, input, option, select, textarea {
          font-family: 'Open Sans', sans-serif;
      }
  }
`

