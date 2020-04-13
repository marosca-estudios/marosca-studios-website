import React from 'react'
// @ts-ignore
import { default as Animation } from 'react-reveal/Fade'
import { StyledSection } from 'styledComponents/Common'
import { TeamMember } from 'data/team/types'
import Development from './Development'
import {
  Wrap,
  EmptyArea,
} from './styled'
import Desktop from 'components/Desktop'

type Props = {
  team: TeamMember[],
}

const Team = ({ team }: Props) =>  (
  <Animation>
    <StyledSection id="team">
      <Wrap>
        <Development team={team} />
        <Desktop>
          <EmptyArea />
        </Desktop>
      </Wrap>
    </StyledSection>
  </Animation>
);

export default Team
