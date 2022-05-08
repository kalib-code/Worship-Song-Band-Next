import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import ResourceText from './resource-text'
import { TOKENS } from '../pages/style'

const SongPurchaseView = (props) => {
  return (
    <SongContainer>
      <TitleContainer>
        <TitleText>{props.song_title}</TitleText>
      </TitleContainer>
      <AlbumContainer>
        <span>{props.song_album_text}</span>
      </AlbumContainer>
      <ArtistContainer>
        <ArtistText>{props.artist_text}</ArtistText>
      </ArtistContainer>
      <ResourceContainer>
        <ResourceText></ResourceText>
      </ResourceContainer>
    </SongContainer>
  )
}

const SongContainer = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceUnit,
  'flex-wrap': 'wrap',
  position: 'relative',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  '@media(max-width: 991px)': {
    'align-items': 'stretch',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
  '@media(max-width: 767px)': {
    'flex-direction': 'column',
  },
})

const TitleContainer = styled('div')({
  flex: '0 0 auto',
  width: '25%',
  display: 'flex',
  'flex-wrap': 'wrap',
  'word-wrap': 'break-word',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  '@media(max-width: 767px)': {
    width: '100%',
  },
  '@media(max-width: 479px)': {
    'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  },
})

const TitleText = styled('span')({
  'font-size': '1em',
  'font-style': 'normal',
  'font-weight': '700',
})

const AlbumContainer = styled('div')({
  flex: '0 0 auto',
  width: '25%',
  display: 'flex',
  'flex-wrap': 'wrap',
  'word-wrap': 'break-word',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  '@media(max-width: 767px)': {
    width: '100%',
  },
  '@media(max-width: 479px)': {
    'padding-bottom': '0px',
  },
})

const ArtistContainer = styled('div')({
  flex: '0 0 auto',
  width: '25%',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'flex-start',
  '@media(max-width: 767px)': {
    width: '100%',
  },
  '@media(max-width: 479px)': {
    'margin-bottom': '10px',
  },
})

const ArtistText = styled('span')({
  'font-style': 'normal',
  'font-weight': '400',
})

const ResourceContainer = styled('div')({
  flex: '0 0 auto',
  width: '25%',
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

SongPurchaseView.defaultProps = {
  song_title: 'Song Title Here',
  artist_text: 'Name of Artist here',
  song_album_text: 'Song Album',
}

SongPurchaseView.propTypes = {
  song_title: PropTypes.string,
  artist_text: PropTypes.string,
  song_album_text: PropTypes.string,
}

export default SongPurchaseView
