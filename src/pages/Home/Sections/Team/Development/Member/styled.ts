import styled, { css, keyframes } from 'styled-components'
import { mqMax, mqMin } from 'utils/mediaQuery'
import theme from 'global/theme'
import { List, Item } from 'styledComponents/Typography'


export const MemberButton = styled.button<{
  isActive: boolean,
  onClick: any,
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  cursor: pointer;
  border: none;
  min-height: 8rem;
  background: none;
  color: ${theme.colors.WHITE};

  font-size: 4rem;
  outline: none;

  &:hover {
    background: ${theme.colors.PRIMARY};
  }

  ${p => p.isActive && css`
    background: ${theme.colors.PRIMARY};
  `}

  transition: 0.5s ease all;
`

export const AbsoluteWrapper = styled.div<{

}>`
  position: absolute;
  left: 100%;
  bottom: 0;
`

export const Card = styled.div<{
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: 50rem;
  height: 20rem;
  background: ${theme.colors.PRIMARY};

  cursor: default;

  transition: 0.25s ease all;

`

export const PhotoWrapper = styled.div`
  display: flex;
  padding-left: 1rem;
  flex: 1.25;
` 

export const Photo = styled.div<{
  src: string,
}>`
  display: flex;
  width: 100%;
  height: 100%;

  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center center;
`

export const Content = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  height: 100%;

  ${mqMax.desktop} {
    flex-direction: row;
    align-items: center;
  }
`

export const StyledList = styled(List)`
  display: flex;
  justify-content: center;

  width: 100%;
  text-align: unset;
  align-items: flex-end;
  padding: 1rem;
`

export const StyledItem = styled(Item)`
  font-size: 2rem;
`

export const LinkSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: ${theme.colors.PRIMARY_DARK};

  ${mqMax.desktop} {
    width: 100%;
    background: none;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 2rem 1rem;
  }
`

export const ButtonLink = styled.button`
  display: flex;
  width: 5rem;
  height: 5rem;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  svg {
    fill: ${theme.colors.DARK};
    width: 5rem;
    height: 5rem;

    &:hover {
      fill: ${theme.colors.WHITE};
    }

    transition: 0.5s ease all;
  }

  
  ${mqMax.desktop} {
    svg {
      fill: ${theme.colors.WHITE};
    }
  }
` 

// Mobile
export const MobileCard = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  background: ${theme.colors.PRIMARY};
` 

export const MobileContentCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  min-height: 10rem;
  background: ${theme.colors.PRIMARY};
  padding: 1rem 0;

  ul {
    padding: 0;
  }

  li {
    font-size: 1.7rem;
  }

` 
