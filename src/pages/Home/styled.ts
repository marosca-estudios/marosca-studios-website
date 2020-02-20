import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 5rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const AbsoluteContent = styled.div`
  position: absolute;
  top: calc(50% - 25rem);
  left: 10rem;
  width: 50%;

`

export const Slogan = styled.h3`
  line-height: 10rem;
  font-size: 6rem;
`

export const Text = styled.h4`
  font-size: 2.6rem;
  line-height: 4rem;
  top: calc(50% - 5rem);
`
