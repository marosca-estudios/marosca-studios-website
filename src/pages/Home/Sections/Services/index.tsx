import React, { useState } from 'react'
// @ts-ignore
import { default as Animation } from 'react-reveal/Fade'
import { StyledSection } from 'styledComponents/Common'
import { Title, SubTitle, List, Item } from 'styledComponents/Typography'
import Service from 'components/Service'
import { frontend, backend } from 'data/services'
import {
  Row,
  EmptyBar,
  MiddleCard,
  ServiceCardWrapper,
} from './styled'

const list = [
  'WEB / MOBILE APPS',
  'API DEVELOPMENT',
  'CI / CD DEPLOYMENT',
  'UX / UI',
  'CODE REVIEWS',
  'PSD TO HTML',
]

const renderList = (x: string) => (
  <Item fontSize={3}>{x}</Item>
)

const AboutUs = () =>  (
  <Animation>
  <StyledSection>
    <Row>
      <EmptyBar />
      <ServiceCardWrapper>
        <Service serviceTitle="FRONTEND" services={frontend} />
      </ServiceCardWrapper>

      <MiddleCard>
          <Title primary>SERVICES</Title>
          <SubTitle primary>- What we do -</SubTitle>

          <List>
            {list.map(x => renderList(x))}
          </List>
      </MiddleCard>

      <ServiceCardWrapper>
        <Service serviceTitle="BACKEND" services={backend} />
      </ServiceCardWrapper>
      <EmptyBar />
    </Row>
  </StyledSection>
  </Animation>
);

export default AboutUs
