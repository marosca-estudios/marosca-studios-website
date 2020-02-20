import styled from 'styled-components'


export const Flex = styled.div`
  display: flex;
  width: 100%;
`

export const Padding = styled(Flex)`
  padding: ${(p: { padding: number }) => `${p.padding || 1}rem}`};
`

export const Margin = styled(Flex)`
  margin: ${(p: { margin: number }) => `${p.margin || 1}rem}`};
`

export const Row = styled(Flex)`
  flex-direction: row;
`

export const Column = styled(Flex)`
  flex-direction: column;
`

export const JustifyBetween = styled(Flex)`
  justify-content: space-between;
`

export const JustifyEvenly = styled(Flex)`
  justify-content: space-evenly;
`

export const JustifyAround = styled(Flex)`
  justify-content: space-around;
`

export const AlignBetween = styled(Flex)`
  align-content: space-between;
`

export const AlignEvenly = styled(Flex)`
  align-content: space-evenly;
`

export const AlignAround = styled(Flex)`
  align-content: space-around;
`
