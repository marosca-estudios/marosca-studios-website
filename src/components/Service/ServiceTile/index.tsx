import React, { useState } from 'react'
import { ServiceType } from 'data/services/types'
import { Wrap, Content } from './styled'
import { Paragraph } from 'styledComponents/Typography'

type Props = {
  service: ServiceType,
}

const ServiceTile = ({ service }: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Wrap isActive={isActive} onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {service.icon()}
      {isActive && (
        <Content>
          <Paragraph dark>{service.displayName}</Paragraph>
          <Paragraph dark>{service.description}</Paragraph>
        </Content>
      )}
    </Wrap>
  )
}

export default ServiceTile
