import React from 'react'
import BackgroundSlideshow from 'components/BackgroundSlideshow'
import {
  Section,
  ContentWrapper,
  Content,
  Slogan,
  Text,
  Triangle,
} from './styled'
import images from './images'

const HeroSection = () =>  (
  <Section>
    <BackgroundSlideshow images={images}>
      <Triangle />
      <Triangle orientation="bottom" />
      <ContentWrapper>
        <Content>
          <Slogan>
            <span>Fast</span>&nbsp; blazing apps built with&nbsp;
            <span>fast</span>&nbsp; blazing tech.
          </Slogan>
          <Text>
            Delivering elite engineered products for those with big visions.
          </Text>
        </Content>
      </ContentWrapper>
    </BackgroundSlideshow>
  </Section>
);

export default HeroSection
