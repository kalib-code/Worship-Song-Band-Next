import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const FeatureCard = (props) => {
  return (
    <StyledFeatureCard compVariant={props.rootClassName}>
      <Text>{props.title}</Text>
      <Text1>{props.description}</Text1>
    </StyledFeatureCard>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
    rootClassName2: {},
    rootClassName3: {},
    rootClassName4: {},
    rootClassName6: {},
    rootClassName7: {},
  },
})

const StyledFeatureCard = styled('div')(componentStyleVariants, {
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceTwounits,
  'align-items': 'center',
  'flex-direction': 'column',
})

const Text = styled('h2')({
  'font-style': 'normal',
  'margin-top': TOKENS.DlSpaceSpaceUnit,
  'text-align': 'center',
  'font-weight': '700',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text1 = styled('span')({
  color: TOKENS.DlColorGray700,
  'text-align': 'center',
})

FeatureCard.defaultProps = {
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  title: 'Lorem ipsum',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
