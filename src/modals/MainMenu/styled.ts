import styled, { keyframes } from 'styled-components'
import theme from 'global/theme'
import { mqMin } from 'utils/mediaQuery'

const hoverAnimation = keyframes`
  0% {
    opacity: 0;
    color: ${theme.colors.WHITE};
    transform: translate(-10px, 0);
  };
  100% {
    opacity: 1;
    color: ${theme.colors.PRIMARY};
    transform: translate(0, 0);
  };
`


export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`

export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  min-width: 20rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;


  ${mqMin.desktop} {
    position: absolute;
    top: 20rem;
    right: 5rem;
  }

`

export const StyledLi = styled.li`
  margin: 1rem 0;
  animation: ${hoverAnimation} 0.1s ease;

`

export const Link = styled.a`
  font-size: 4rem;
  color: ${theme.colors.WHITE};

  text-decoration: none;

  &:hover {
    color: ${theme.colors.PRIMARY};
  }

  transition: 0.2s ease all;

  ${mqMin.desktop} {
    font-size: 5rem;
  }
`
