import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '../pages/style'

const PlayList = (props) => {
  return (
    <StyledPlayList>
      <Image
        alt={props.Image_Background_Alt}
        src={props.Image_Background}
        loading="lazy"
      />
      <Container>
        <ArtistAvatar
          alt={props.Artist - Avatar_alt}
          src={props.Artist - Avatar_src}
        />
        <Div>
          <Text>{props.Title}</Text>
          <Text1>{props.SubTitle}</Text1>
        </Div>
      </Container>
      <Icon viewBox="0 0 1024 1024">
        <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </Icon>
    </StyledPlayList>
  )
}

const StyledPlayList = styled('div')({
  flex: '0 0 auto',
  width: TOKENS.DlSizeSizeXxlarge,
  height: TOKENS.DlSizeSizeXxlarge,
  display: 'flex',
  position: 'relative',
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'border-radius': '20px',
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
})

const Image = styled('img')({
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  position: 'absolute',
  'align-self': 'center',
  'object-fit': 'cover',
  'border-radius': '20px',
})

const Container = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  position: 'relative',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceHalfunit,
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': '20px',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'background-color': 'rgba(0, 0, 0, 0.29)',
})

const ArtistAvatar = styled('img')({
  width: '50px',
  height: '50px',
  'object-fit': 'cover',
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': '100px',
})

const Div = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-self': 'center',
  'flex-direction': 'column',
})

const Text = styled('span')({
  color: '#fffefe',
  'font-style': 'normal',
  'font-weight': '700',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text1 = styled('span')({
  color: '#f5f0f0',
  'font-style': 'normal',
  'font-weight': '600',
})

const Icon = styled('svg')({
  fill: '#BF5837',
  right: '0px',
  width: TOKENS.DlSizeSizeSmall,
  bottom: '0px',
  height: TOKENS.DlSizeSizeSmall,
  position: 'absolute',
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

PlayList.defaultProps = {
  'Artist-Avatar_alt': 'image',
  Title: 'Title',
  Image_Background:
    'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=300',
  Image_Background_Alt: 'image',
  SubTitle: 'Sub-title',
  'Artist-Avatar_src':
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGF2YXRhcnxlbnwwfHx8fDE2NDA0MzM3MjI&ixlib=rb-1.2.1&w=200',
}

PlayList.propTypes = {
  'Artist-Avatar_alt': PropTypes.string,
  Title: PropTypes.string,
  Image_Background: PropTypes.string,
  Image_Background_Alt: PropTypes.string,
  SubTitle: PropTypes.string,
  'Artist-Avatar_src': PropTypes.string,
}

export default PlayList
