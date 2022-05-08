import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '../pages/style'

const PriceDetails = (props) => {
  return (
    <StyledPriceDetails>
      <PricingDetails>
        <span>Multi Track x 1 $9.99</span>
        <br></br>
        <span>Chord Chart 1 x $2.5</span>
        <br></br>
        <span>MP3 File x 1 $5.00</span>
        <Text3></Text3>
      </PricingDetails>
      <TotalPrice>{props.TotalPrice}</TotalPrice>
      <Button projVariant="button">{props.button}</Button>
    </StyledPriceDetails>
  )
}

const StyledPriceDetails = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-end',
  'padding-top': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  '@media(max-width: 767px)': {
    width: 'auto',
    'align-items': 'flex-end',
  },
})

const PricingDetails = styled('span')({
  'font-size': '1.5em',
  'font-style': 'normal',
  'text-align': 'right',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
})

const Text3 = styled('span')({
  'text-align': 'right',
})

const TotalPrice = styled('span')({
  'font-size': '1.5em',
  'font-style': 'normal',
  'font-weight': '700',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Button = styled('button')(projectStyleVariants, {
  width: '100%',
  'text-align': 'center',
  'background-color': TOKENS.DlColorPrimaryMaroon,
})

PriceDetails.defaultProps = {
  TotalPrice: 'Total $17.49',
  button: 'Purchase',
}

PriceDetails.propTypes = {
  TotalPrice: PropTypes.string,
  button: PropTypes.string,
}

export default PriceDetails
