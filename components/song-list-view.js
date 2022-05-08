import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import ResourceContainer from './resource-container'
import { TOKENS } from '../pages/style'

const SongListView = (props) => {
  return (
    <SongListView compVariant={props.rootClassName}>
      <ImageContainer>
        <AlbumMage alt={props.album_mage_alt} src={props.album_mage_src} />
      </ImageContainer>
      <SongContainer>
        <TitleContainer>
          <TitleText>{props.title_text}</TitleText>
        </TitleContainer>
        <ArtistContainer>
          <ArtistText>{props.artist_text}</ArtistText>
        </ArtistContainer>
        <ResourceContainer></ResourceContainer>
      </SongContainer>
    </SongListView>
  )
}

const SongListView = styled('div')(componentStyleVariants, {
  flex: '0 0 auto',
  width: '70%',
  display: 'flex',
  'align-items': 'center',
  'grid-column': '2',
  'padding-top': TOKENS.DlSpaceSpaceHalfunit,
  'border-color': 'rgba(89, 89, 89, 0.25)',
  'border-width': '1px',
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'border-top-width': '0px',
  'justify-content': 'flex-start',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '1px',
  '@media(max-width: 991px)': {
    width: '100%',
  },
  '@media(max-width: 767px)': {
    'border-radius': '20px',
  },
  '@media(max-width: 479px)': {
    padding: TOKENS.DlSpaceSpaceHalfunit,
  },
})

const ImageContainer = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'center',
  'justify-content': 'flex-start',
})

const AlbumMage = styled('img')({
  width: TOKENS.DlSizeSizeMedium,
  height: TOKENS.DlSizeSizeMedium,
  'object-fit': 'cover',
  'border-radius': '20px',
  '@media(max-width: 991px)': {
    'align-self': 'center',
  },
})

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
  width: '33.33%',
  display: 'flex',
  'flex-wrap': 'wrap',
  'word-wrap': 'break-word',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  '@media(max-width: 767px)': {
    width: '100%',
  },
})

const TitleText = styled('span')({
  'font-size': '1em',
  'font-style': 'normal',
  'font-weight': '700',
})

const ArtistContainer = styled('div')({
  flex: '0 0 auto',
  width: '33.33%',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'center',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'flex-start',
  '@media(max-width: 767px)': {
    width: '100%',
  },
})

const ArtistText = styled('span')({
  'font-size': '1em',
  'font-style': 'normal',
  'font-weight': '600',
})

SongListView.defaultProps = {
  artist_text: 'Name of Artist here',
  rootClassName: '',
  album_mage_alt: 'image',
  title_text: 'Song Title Here',
  album_mage_src:
    'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNjQwNTI2MzUy&ixlib=rb-1.2.1&w=200',
}

SongListView.propTypes = {
  artist_text: PropTypes.string,
  rootClassName: PropTypes.string,
  album_mage_alt: PropTypes.string,
  title_text: PropTypes.string,
  album_mage_src: PropTypes.string,
}

export default SongListView
