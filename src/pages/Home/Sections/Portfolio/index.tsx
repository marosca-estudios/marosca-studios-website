import React from 'react'
// @ts-ignore
import { default as Animation } from 'react-reveal/Fade'
import { StyledSection } from 'styledComponents/Common'
import { Project } from 'data/portfolio/types'
import ContentArea from './ContentArea'
import ImageArea from './ImageArea'
import {
  Wrap,
} from './styled'

type Props = {
  project: Project,
}

const Portfolio = ({ project }: Props) =>  (
  <Animation>
    <StyledSection id="portfolio" backgroundColor={project.projectColors.background}>
      <Wrap>
        {project.projectLayout.left === 'image'
          ? <ImageArea project={project} />
          : <ContentArea project={project} />
        }
        {project.projectLayout.right === 'image'
          ? <ImageArea project={project} />
          : <ContentArea project={project} />
        }
      </Wrap>
    </StyledSection>
  </Animation>
);

export default Portfolio
