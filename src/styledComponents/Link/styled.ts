import styled, { css } from 'styled-components'
import theme from 'global/theme'

const ANIMATION_SPEED = 0.2

export const StyledLink = styled.a`
  position: relative;
  cursor: pointer;

  min-height: 4rem;

  .original {
    pointer-events: none;
    transition: ${ANIMATION_SPEED}s ease all;
  }

  .overlay {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 100%;
    right: 0;
    color: ${theme.colors.PRIMARY};
    overflow: hidden;
    width: 100%;

    opacity: 0;
    transition: ${ANIMATION_SPEED}s ease ;
  }

  .overlay * {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  :hover {
    .overlay {
      width: 100%;
      left: 0;
      opacity: 1;
    }

    .original {
      opacity: 0;
      transform: translate(-50%, -0%);
    }
  }

`
