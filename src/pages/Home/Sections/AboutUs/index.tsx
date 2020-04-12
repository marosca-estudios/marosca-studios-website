import React from 'react'
import {
  Section,
  TopBar,
  Container,
  ContainerWithText,
  Content, 
  Title, TextAboutUs, 
  ImageAboutUs
} from './styled'
import images from './images'
import theme from 'global/theme'
import { StyledSection } from 'styledComponents/Common'


const AboutUs = () =>  (
  <StyledSection>
    <TopBar />
    <Container>
      <ContainerWithText>
        <Content>
          <Title>Lovers of <br /> digital Narratives</Title>
          <TextAboutUs>
            <b>We are a web development studio based in Lisbon.</b>
            Our passion lies in empowering big-thinkers and bringing their ideas to life by
            providing full product-development, from wireframe to production.
          </TextAboutUs>
        </Content>
      </ContainerWithText>
      <ImageAboutUs />
    </Container>
  </StyledSection>
);

export default AboutUs;
