import React from 'react'
import Logo from 'styledComponents/Logo'
import {
  Wrapper,
  NavWrapper,
  Nav,
  Section,
  Content,
  AbsoluteContent,
  Slogan,
  Text,
} from './styled'
import theme from 'global/theme'

const Home = () => {

  return (
    <Wrapper>
      <NavWrapper>
        <Nav>
          <Logo>
            MAROSCA STUDIOS
          </Logo>
          <></>
        </Nav>
      </NavWrapper>
      <Section>
        <Content>
          <AbsoluteContent>
            <Slogan>
              <span style={{ borderBottom: '1rem solid', borderBottomColor: theme.colors.PRIMARY}}>
                Fast
              </span>
              &nbsp;blazing apps built with&nbsp;
              <span style={{ borderBottom: '1rem solid', borderBottomColor: theme.colors.PRIMARY}}>
                fast
              </span>
              &nbsp;blazing tech.
            </Slogan>
            <Text>
              We deliver elite engineered products for those with big visions.
            </Text>

          </AbsoluteContent>
        </Content>
      </Section>
      <Section style={{ background: theme.colors.PRIMARY }}>
        <Content>
          Fast blazing apps built with fast blazing tech.
        </Content>
      </Section>
    </Wrapper>
  )
}

export default Home
