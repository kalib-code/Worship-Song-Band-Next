import React from 'react'

import styled from 'styled-components'

import ResourceText from './resource-text'
import { TOKENS } from '../pages/style'

const ResourceContainer = (props) => {
  return (
    <ResourceContainer>
      <ResourceText></ResourceText>
    </ResourceContainer>
  )
}

export default ResourceContainer

const ResourceContainer = styled('div')({
  flex: '0 0 auto',
  width: '33.33%',
  border: '2px dashed rgba(120, 120, 120, 0.4)',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'flex-direction': 'row',
  'justify-content': 'flex-start',
  '@media(max-width: 767px)': {
    width: '100%',
  },
})
