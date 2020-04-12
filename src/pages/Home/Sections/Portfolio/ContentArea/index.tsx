import React from 'react'
import { Project } from 'data/portfolio/types'
import {
  Wrap,
  Text,
  LinkSection,
  ButtonLink,
} from './styled'
import { List, Item } from 'styledComponents/Typography'

type Props = {
  project: Project,
}

const ContentArea = ({ project }: Props) =>  (
  <Wrap>
    <Text textColor={project.projectColors.logo} fontSize={6.5}>
      {project.projectName.toLocaleUpperCase()}
    </Text>
    
    <Text textColor={project.projectColors.description} fontSize={3}>
      {project.projectDescription}
    </Text>

    <List>
      {project.projectBulletpoints.map(x => (
        <Item>
          <Text
            textColor={project.projectColors.bulletpoints.text}
            style={{ background: project.projectColors.bulletpoints.background, width: 'fit-content', padding: '0 1rem' }}
            fontSize={2}
          >
            <strong>{x}</strong>
          </Text> 
        </Item>
      ))}
    </List>

    <LinkSection>
        {project.projectsLinks.map(x => (
          <ButtonLink onClick={() => window.open(x.src, '_blank')} style={{ background: project.projectColors.links.background, color: project.projectColors.links.text }}>
            {x.icon}
          </ButtonLink>
        ))}
    </LinkSection>
  </Wrap>
);

export default ContentArea
