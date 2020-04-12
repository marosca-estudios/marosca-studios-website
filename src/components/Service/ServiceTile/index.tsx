import React, { useState, Fragment } from 'react'
import { ServiceType } from 'data/services/types'
import { Wrap, Content } from './styled'
import { Paragraph } from 'styledComponents/Typography'
import Desktop from 'components/Desktop'
import Mobile from 'components/Mobile'

type Props = {
  service: ServiceType,
}

const ServiceTile = ({ service }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const content = () => (
    <Fragment>
      {service.icon()}
      {isActive && (
        <Content>
          <Paragraph dark>{service.displayName}</Paragraph>
          <Paragraph dark>{service.description}</Paragraph>
        </Content>
      )}
    </Fragment>
  )

  return (
    <Fragment>
      <Desktop>
        <Wrap isActive={isActive} onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
          {content()}
        </Wrap>
      </Desktop>
      <Mobile>
        <Wrap isActive={isActive} onClick={() => setIsActive(!isActive)}>
          {content()}
        </Wrap>
      </Mobile>
    </Fragment>
  )
}

export default ServiceTile
