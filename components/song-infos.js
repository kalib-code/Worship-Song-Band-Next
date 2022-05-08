import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const SongInfos = (props) => {
  return (
    <StyledSongInfos>
      <AlbumImage alt={props.image_alt} src={props.image_src} />
      <InfoTextContainer>
        <TitleText>{props.title_text}</TitleText>
        <ArtistText>{props.artist_text}</ArtistText>
        <TypeText>{props.type_text}</TypeText>
        <KeyText>{props.key_text}</KeyText>
        <BpmText>{props.bpm_text}</BpmText>
        <TimeSignatureText>{props.time_signature_text}</TimeSignatureText>
        <span>{props.length_text}</span>
      </InfoTextContainer>
      <Icon viewBox="0 0 1024 1024">
        <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </Icon>
      <Icon2 viewBox="0 0 877.7142857142857 1024">
        <path d="M621.714 676.571v-329.143c0-10.286-8-18.286-18.286-18.286h-329.143c-10.286 0-18.286 8-18.286 18.286v329.143c0 10.286 8 18.286 18.286 18.286h329.143c10.286 0 18.286-8 18.286-18.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
      </Icon2>
    </StyledSongInfos>
  )
}

const StyledSongInfos = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-start',
  'padding-top': '0px',
  'padding-left': '0px',
  'padding-right': '0px',
  'padding-bottom': '0px',
  '@media(max-width: 767px)': {
    width: '538px',
    'flex-wrap': 'wrap',
  },
  '@media(max-width: 479px)': {
    width: '100%',
    padding: '0px',
  },
})

const AlbumImage = styled('img')({
  width: '200px',
  height: '200px',
  'object-fit': 'cover',
  'margin-right': TOKENS.DlSpaceSpaceUnit,
  'border-radius': '20px',
})

const InfoTextContainer = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
})

const TitleText = styled('span')({
  'font-size': '1.5em',
  'font-style': 'normal',
  'font-weight': '600',
  '@media(max-width: 479px)': {
    'font-size': '1em',
  },
})

const ArtistText = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 479px)': {
    'font-size': '1em',
  },
})

const TypeText = styled('span')({
  'font-style': 'normal',
  'font-weight': '700',
})

const KeyText = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const BpmText = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const TimeSignatureText = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Icon = styled('svg')({
  fill: TOKENS.DlColorPrimaryMaroon,
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  'margin-top': '0px',
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  '@media(max-width: 479px)': {
    'align-self': 'flex-start',
  },
})

const Icon2 = styled('svg')({
  fill: TOKENS.DlColorPrimaryGold,
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  '@media(max-width: 479px)': {
    'align-self': 'flex-start',
  },
})

SongInfos.defaultProps = {
  artist_text: 'Hannah Ford - FAITH',
  key_text: 'Key:Db',
  time_signature_text: 'Time Sig:4/4',
  title_text: 'By Your Stripes',
  length_text: 'Length:4:11',
  image_alt: 'image',
  type_text: 'Orignal Master',
  image_src:
    'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=200',
  bpm_text: 'BPM:148',
}

SongInfos.propTypes = {
  artist_text: PropTypes.string,
  key_text: PropTypes.string,
  time_signature_text: PropTypes.string,
  title_text: PropTypes.string,
  length_text: PropTypes.string,
  image_alt: PropTypes.string,
  type_text: PropTypes.string,
  image_src: PropTypes.string,
  bpm_text: PropTypes.string,
}

export default SongInfos
