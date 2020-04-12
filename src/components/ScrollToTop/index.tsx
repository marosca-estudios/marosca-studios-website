import React, { useState, useCallback, useEffect, useRef, Fragment } from 'react'
import scroll from 'utils/scroll'
import {
  ScrollWrapper,
} from './styled'
import Scroll from 'assets/icons/scroll'

const ScrollToTop = () => {

  return (
    <ScrollWrapper onClick={scroll}>
      <Scroll />
    </ScrollWrapper>
  )
}

export default ScrollToTop
