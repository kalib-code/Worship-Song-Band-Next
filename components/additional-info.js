import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const AdditionalInfo = (props) => {
  return (
    <Container>
      <Text>{props.genresText}</Text>
      <Text1>{props.themeText}</Text1>
      <Text2>{props.wirterText}</Text2>
      <Text3>{props.yearText}</Text3>
      <Text4>{props.mtIdText}</Text4>
      <Text5>{props.copyRightsText}</Text5>
    </Container>
  )
}

const Container = styled('div')({
  flex: '0 0 auto',
  width: '300px',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'border-radius': '20px',
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  'background-color': '#f7f5e9',
})

const Text = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text1 = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text2 = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text3 = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text4 = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text5 = styled('span')({
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

AdditionalInfo.defaultProps = {
  yearText: 'Year: 2019',
  copyRightsText: '℗ 2019 Hanna Ford',
  wirterText: 'Writers: Hanna Ford',
  genresText: 'Genres: CHRISTMAS, MALE LEAD',
  mtIdText: 'mtID: 14610',
  themeText: 'Themes: BLESSING, CHRISTMAS, JOY',
}

AdditionalInfo.propTypes = {
  yearText: PropTypes.string,
  copyRightsText: PropTypes.string,
  wirterText: PropTypes.string,
  genresText: PropTypes.string,
  mtIdText: PropTypes.string,
  themeText: PropTypes.string,
}

export default AdditionalInfo
