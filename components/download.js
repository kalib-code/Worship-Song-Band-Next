import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '../pages/style'

const Download = (props) => {
  return (
    <Container>
      <Image alt={props.image_alt} src={props.image_src} />
      <Text>{props.text}</Text>
      <Button projVariant="button">{props.button}</Button>
    </Container>
  )
}

const Container = styled('div')({
  flex: '0 0 auto',
  width: '50%',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  'justify-content': 'center',
})

const Image = styled('img')({
  width: '50%',
  'margin-top': '0px',
  'object-fit': 'cover',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text = styled('span')({
  'font-size': '2em',
  'font-style': 'normal',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Button = styled('button')(projectStyleVariants, {
  color: '#f7f2f2',
  'border-color': 'rgba(0, 0, 0, 0)',
  'border-width': '0px',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'background-color': TOKENS.DlColorDanger300,
})

Download.defaultProps = {
  button: 'Download',
  image_src: 'c306f54a-01d0-49c1-9acb-69b1da3a3aab',
  text: 'Mac OS',
  image_alt: 'image',
}

Download.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Download
