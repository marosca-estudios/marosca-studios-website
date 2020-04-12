import styled from 'styled-components'
import { color, size } from './Enhancers'

export const Paragraph = styled.p<any>`
  ${color};
`

export const Title = styled.h1<any>`
  ${color};
  font-size: 6rem;
`

export const SubTitle = styled.h2<any>`
  ${color};
  font-size: 3rem;
`


export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;

  flex-direction: column;
  line-height: 4rem;

  text-align: center;
`

export const Item = styled.li<any>`
  ${color};
  ${size};
`

