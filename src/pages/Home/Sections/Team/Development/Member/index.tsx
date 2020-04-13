import React, { useState, Fragment } from 'react'
// @ts-ignore
import { default as Animation } from 'react-reveal/Fade'
// @ts-ignore
import { default as MobileAnimation } from 'react-reveal/Bounce'
import {
  MemberButton,
  AbsoluteWrapper,
  Card,
  Photo,
  PhotoWrapper,
  Content,
  StyledList as List,
  StyledItem as Item,
  LinkSection,
  ButtonLink,
  // Mobile
  MobileCard,
  MobileContentCard,
} from './styled'
import { TeamMember } from 'data/team/types'
import Mobile from 'components/Mobile'
import Desktop from 'components/Desktop'
import { Title } from 'styledComponents/Typography'
import Arrow from 'components/Arrow'

type Props = {
  member: TeamMember,
  isActive: boolean,
  onSelect: () => void,
}

const Member = ({ member, isActive, onSelect }: Props) => {

  return (
    <Fragment>
      <Mobile>
        <MobileCard>
          <PhotoWrapper>
            <Photo src={member.photo} />
          </PhotoWrapper>
          <Content>
            <Title style={{ fontSize: '2.6rem', padding: '1rem', width: '50%'}}>
              {member.fullName.toLocaleUpperCase()}
            </Title>
            <Arrow isActive={isActive} handleClick={onSelect} />
          </Content>
        </MobileCard>
          {isActive && (
            <MobileContentCard>
              <MobileAnimation>
                <List>
                  {member.functions.map(x => (
                    <Item>
                      {x}
                    </Item>
                  ))}
                </List>
                <LinkSection>
                  {member.links.map(x => (
                    <ButtonLink onClick={() => window.open(x.src, '_blank')}>
                      {x.icon}
                    </ButtonLink>
                  ))}
                </LinkSection>
              </MobileAnimation>
            </MobileContentCard>
          )}
      </Mobile>
      <Desktop>
        <MemberButton isActive={isActive} onClick={onSelect}>
          {member.fullName}

          {isActive && (
            <AbsoluteWrapper>
            <Animation>
              <Card onClick={e => e.stopPropagation()}>
                  <PhotoWrapper>
                    <Photo src={member.photo} />
                  </PhotoWrapper>
                  <Content>
                    <List>
                      {member.functions.map(x => (
                        <Item>
                          {x}
                        </Item>
                      ))}
                    </List>
                    <LinkSection>
                        {member.links.map(x => (
                          <ButtonLink onClick={() => window.open(x.src, '_blank')}>
                            {x.icon}
                          </ButtonLink>
                        ))}
                    </LinkSection>
                  </Content>
              </Card>
            </Animation>
            </AbsoluteWrapper>
          )}
        </MemberButton>
      </Desktop>
    </Fragment>
  )
}

export default Member
