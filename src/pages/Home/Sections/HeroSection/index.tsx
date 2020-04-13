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
           Fast blazing apps built with
           fast blazing tech.
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
