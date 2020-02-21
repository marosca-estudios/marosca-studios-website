import styled, { css, keyframes } from 'styled-components'

const getCurrentKeyframe = (index: number, count: number) => keyframes`
  0% {
    opacity: 0;
  }
  ${(100 / count) * (index - 1) - 5}% {
    opacity: 0;
  }
  ${(100 / count) * (index - 1)}% {
    opacity: 1;
  }
  ${(100 / count) * index - 5}% {
    opacity: 1;
  }
  ${(100 / count) * index}% {
    opacity: 0;
  }
  100% {
      opacity: 0;
  }
`

const getAnimation = (index: number, count: number) => css`
  animation: ${getCurrentKeyframe(index, count)} 12s linear infinite;
`

type P = {
  src: string,
  index: number,
  count: number,
}

export const Layer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;

  ::before {
    content: "";
    background: url(${(p: P) => p.src});
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    filter: brightness(40%) contrast(100%);
  }

  ${(p: P) => p.index > 0 && getAnimation(p.index + 1, p.count)};
`
