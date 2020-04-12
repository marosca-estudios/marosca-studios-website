import React from 'react'
import { ServiceType } from 'data/services/types'
import { SubTitle } from 'styledComponents/Typography'
import ServiceTile from './ServiceTile'
import { Wrap, Header, Content } from './styled'

type Props = {
  serviceTitle: string,
  services: ServiceType[],
}
const Service = ({
  serviceTitle,
  services
}: Props) => (
  <Wrap>
    <Header>
      <SubTitle dark>{serviceTitle}</SubTitle>
    </Header>
    <Content>
      {services.map(service => <ServiceTile service={service} /> )}
    </Content>
  </Wrap>
)

export default Service
