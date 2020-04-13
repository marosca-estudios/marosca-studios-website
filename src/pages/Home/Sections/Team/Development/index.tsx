import React, { useState } from 'react'
import { Project } from 'data/portfolio/types'
import {
  Wrap,
  StyledTitle as Title,
} from './styled'
import { List, Item } from 'styledComponents/Typography'
import { TeamMember } from 'src/data/team/types'
import Member from './Member'

type Props = {
  team: TeamMember[],
}

const Development = ({ team }: Props) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleSelection = (i: number) => {
    if (activeIndex === i) {
      return setActiveIndex(-1)
    }

    setActiveIndex(i)
  }

  return (
    <Wrap>
      <Title primary>
        DEVELOPERS
      </Title>
      {team.map((x, i) => <Member member={x} isActive={i === activeIndex} onSelect={() => handleSelection(i)} />)}
    </Wrap>
  );
} 

export default Development
