import React from 'react'
import { Project } from 'data/portfolio/types'
// @ts-ignore
import { default as Animation } from 'react-reveal/Bounce'
import {
  Wrap,
  Image,
  ImageWrap,
} from './styled'

type Props = {
  project: Project,
}

const ImageArea = ({ project }: Props) =>  (
  <Wrap>
    <ImageWrap>
      <Animation>
        <Image src={project.projectImage} />
      </Animation>
    </ImageWrap>
  </Wrap>
);

export default ImageArea
