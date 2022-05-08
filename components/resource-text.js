import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const ResourceText = (props) => {
  return (
    <Container>
      <ResourceText>{props.typeTitle}</ResourceText>
    </Container>
  )
}

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  position: 'relative',
})

const ResourceText = styled('span')({
  color: TOKENS.DlColorGrayWhite,
  'font-size': '12px',
  'font-style': 'normal',
  'font-weight': '600',
  'padding-top': '5px',
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': '20px',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '5px',
  'background-color': TOKENS.DlColorPrimaryMaroon,
})

ResourceText.defaultProps = {
  typeTitle: 'Multi-Tracks',
}

ResourceText.propTypes = {
  typeTitle: PropTypes.string,
}

export default ResourceText
