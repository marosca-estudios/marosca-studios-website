import React, { useState } from 'react'
import { StyledSection } from 'styledComponents/Common'
import { Title, SubTitle } from 'styledComponents/Typography'
import Service from 'components/Service'
import { frontend, backend } from 'data/services'
import {
  Row,
  EmptyBar,
  MiddleCard,
  ServiceCardWrapper,
} from './styled'


const AboutUs = () =>  (
  <StyledSection>
    <Row>
      <EmptyBar />
      
      <ServiceCardWrapper>
        <Service serviceTitle="FRONTEND" services={frontend} />
      </ServiceCardWrapper>

      <MiddleCard>
          <Title>SERVICES</Title>
          <SubTitle>- What we do -</SubTitle>
      </MiddleCard>

      <ServiceCardWrapper>
        <Service serviceTitle="BACKEND" services={backend} />
      </ServiceCardWrapper>

      <EmptyBar />
    </Row>

  </StyledSection>
);

export default AboutUs
