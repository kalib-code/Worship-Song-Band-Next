import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const OptionButton = (props) => {
  return (
    <Capsule>
      <Text>{props.text}</Text>
    </Capsule>
  )
}

const Capsule = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'margin-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'border-radius': '20px',
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'background-color': '#fbfafa',
})

const Text = styled('span')({
  color: '#080808',
  'font-style': 'normal',
  'font-weight': '600',
  'padding-top': TOKENS.DlSpaceSpaceHalfunit,
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

OptionButton.defaultProps = {
  text: 'All',
}

OptionButton.propTypes = {
  text: PropTypes.string,
}

export default OptionButton
