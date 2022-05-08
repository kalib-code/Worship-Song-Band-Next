import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '../pages/style'

const DownloadButton = (props) => {
  return (
    <Container>
      <Button projVariant="button">{props.button1}</Button>
    </Container>
  )
}

const Container = styled('div')({
  display: 'flex',
  position: 'relative',
})

const Button = styled('button')(projectStyleVariants, {
  color: TOKENS.DlColorGrayWhite,
  'background-color': TOKENS.DlColorDanger300,
})

DownloadButton.defaultProps = {
  button1: 'Download',
}

DownloadButton.propTypes = {
  button1: PropTypes.string,
}

export default DownloadButton
