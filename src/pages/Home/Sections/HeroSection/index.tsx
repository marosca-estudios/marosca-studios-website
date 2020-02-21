import React from 'react'
import theme from 'global/theme'
import {
  Section,
  ContentWrapper,
  Content,
  Slogan,
  Text,
  Triangle,
} from './styled'

const HeroSection = () =>  (
  <Section>
    <Triangle />
    <Triangle orientation="bottom" />
    <ContentWrapper>
      <Content>
        <Slogan>
          <span>Fast</span>&nbsp; blazing apps built with&nbsp;
          <span>fast</span>&nbsp; blazing tech.
        </Slogan>
        <Text>
          We deliver elite engineered products for those with big visions.
        </Text>
      </Content>
    </ContentWrapper>
  </Section>
);

export default HeroSection
