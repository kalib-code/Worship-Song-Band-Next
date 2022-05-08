import React from 'react'
import Link from 'next/link'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const NavigationLinks = (props) => {
  return (
    <Nav compVariant={props.rootClassName}>
      <Text>{props.documentation}</Text>
      <Link href="/store">
        <StyledLink>{props.store}</StyledLink>
      </Link>
    </Nav>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
    rootClassName1: {},
    rootClassName2: {},
    rootClassName3: {},
    rootClassName4: {},
    rootClassName5: {},
    rootClassName6: {},
    rootClassName7: {},
  },
})

const Nav = styled('nav')(componentStyleVariants, {
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'row',
  '@media(max-width: 767px)': {
    'align-items': 'flex-start',
    'flex-direction': 'column',
  },
})

const Text = styled('span')({
  '@media(max-width: 767px)': {
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
})

const StyledLink = styled('a')({
  'margin-left': TOKENS.DlSpaceSpaceTwounits,
  'text-decoration': 'none',
  '@media(max-width: 767px)': {
    'margin-left': '0',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
})

NavigationLinks.defaultProps = {
  store: 'Store',
  documentation: 'Documentation',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  store: PropTypes.string,
  documentation: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
