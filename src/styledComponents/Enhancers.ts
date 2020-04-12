import styled, { css } from 'styled-components'
import theme from 'global/theme'

/** Receveis props and attempts to find a match in the global theme colors object  */
const getColor = (props: Object): string => {
  const { colors } = theme
  const { keys, values } = Object

  const index = keys(colors).findIndex(
    entry => keys(props).find(x => x.toLocaleLowerCase() === entry.toLocaleLowerCase())
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

/** Receveis all props and attempts to find a number to be used as font-size*/
const getSize = (props: Object): string => {
  const { keys, values } = Object

  // @ts-ignore
  if (!props.fontSize) {
    return `${1}rem`
  }

  // @ts-ignore
  return `${props.fontSize}rem` 
}
export const size = css`
  ${(p) => p &&
    css`
      font-size: ${getSize(p)};
    `
  }
`
