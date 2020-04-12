import React from 'react'
import { ServiceType } from 'data/services/types'
import { SubTitle } from 'styledComponents/Typography'
import ServiceTile from './ServiceTile'
import { Wrap, Content, Grid } from './styled'

type Props = {
  serviceTitle: string,
  services: ServiceType[],
}
const Service = ({
  serviceTitle,
  services
}: Props) => (
  <Wrap>
    <SubTitle dark>{serviceTitle}</SubTitle>
    <Content>
      <Grid>
      {services.map(service => <ServiceTile service={service} /> )}
      </Grid>
    </Content>
  </Wrap>
)

export default Service
