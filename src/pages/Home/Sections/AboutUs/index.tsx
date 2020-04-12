import React from 'react'
import {
  Section,
  TopBar,
  Container,
  ContainerWithText,
  Content, 
  Title, TextAboutUs, 
  ImageWeb
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
          <Title style={{fontSize: '60px'}}>Lovers of <br /></Title>
          <Title style={{fontSize: '30px'}}>digital Narratives</Title>
          <TextAboutUs>
            <TextAboutUs style={{fontWeight: "bold"}}> We are a web development studio based in Lisbon.</TextAboutUs>
            Our passion lies in empowering big-thinkers and bringing their ideas to life by
            providing full product-development, from wireframe to production.
          </TextAboutUs>
        </Content>
      </ContainerWithText>
      <ImageWeb src={images[0].src} />
    </Container>
  </StyledSection>
);

export default AboutUs;
