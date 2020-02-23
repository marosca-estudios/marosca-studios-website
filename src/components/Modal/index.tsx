import React from 'react'
import {
  Overlay,
  Body,
  CloseButton,
} from './styled'
import Mobile from '../Mobile'

type Props = {
  children: React.ReactChild | React.ReactNode,
  isOpen: boolean,
  setIsOpen: (v: boolean) => void,
  hasCloseButton?: boolean,
}

class Modal extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)

    this.close = this.close.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.close)

    const { body } = document
    if (body) {
      body.classList.add('overflowHidden')
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.close)

    const { body } = document

    if (body) {
      body.classList.remove('overflowHidden')
    }
  }

  close() {
    const { setIsOpen } = this.props

    setIsOpen(false)
  }

  render() {
    const { children, isOpen, hasCloseButton = false } = this.props

    if (!isOpen) {
      return null
    }

    return (
      <Overlay isOpen={isOpen} onClick={this.close}>
        {hasCloseButton &&
          <Mobile>
            <CloseButton onClick={this.close}>X</CloseButton>
          </Mobile>
        }
        <Body onClick={e => e.stopPropagation()}>
          {children}
        </Body>
      </Overlay>
    )
  }
}

export default Modal
