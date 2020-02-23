import styled, { keyframes } from 'styled-components'
import theme from 'global/theme'

const fadeDuration = 250

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;

  top: 0;
  left: 0;

  animation: ${fadeIn} ${fadeDuration}ms ease;
  transition: opacity 0.5s;

  pointer-events: ${(p: {isOpen: boolean}) => p.isOpen ? 'initial' : 'none'};
  opacity: ${(p: {isOpen: boolean}) => p.isOpen ? 1 : 0};

  display: flex;
  flex-direction: column;


  overflow-y: hidden;

  z-index: ${theme.zIndices.MODAL};

  ::before {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }
`

export const Body = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.DARK};
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  cursor: pointer;

  position: absolute;

  top: 3rem;
  right: 3rem;

  z-index: ${theme.zIndices.ABOVE_MODAL};

  background: ${theme.colors.PRIMARY};
  color: ${theme.colors.WHITE};

  border: none;
  font-size: 3rem;
`
