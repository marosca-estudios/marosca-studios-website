import React from 'react'
import { Layer } from './styled'

type Props = {
  children: React.ReactNode,
  images: {
    src: string,
    author: string,
    link: string,
  }[],
}

const BackgroundSlideshow = ({ children, images }: Props) =>
  <React.Fragment>
    {images.map(
      (image, index) =>
        <Layer key={index} index={index} count={images.length} src={image.src}>
          {children}
        </Layer>
    )}
  </React.Fragment>

export default BackgroundSlideshow
