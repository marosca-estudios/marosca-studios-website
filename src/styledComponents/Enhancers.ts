import styled, { css } from 'styled-components'
import theme from 'global/theme'

/** Receveis a color string and attempts to find a match in the global theme colors object  */
const getColor = (color: Object): string => {
  // Attempt to extract a color
  const { colors } = theme
  const { keys, values } = Object

  const index = keys(colors).findIndex(
    entry => keys(color).find(x => x.toLocaleLowerCase() === entry.toLocaleLowerCase())
  )

  if (index === -1) {
    console.warn(`No color to extract. Falling back to ${theme.colors.WHITE}. Check logs for more information.`)
    return theme.colors.WHITE
  }

  return values(colors)[index]
}

export const color = css`
  ${(p) => p &&
    css`
      color: ${getColor(p)};
    `
  }
`
