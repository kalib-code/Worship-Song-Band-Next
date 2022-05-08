import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Header from '../components/header'
import SongPurchaseView from '../components/song-purchase-view'
import Footer from '../components/footer'
import { TOKENS } from './style'

const User = (props) => {
  return (
    <Container>
      <Head>
        <title>user - Worship Song Band</title>
        <meta property="og:title" content="user - Worship Song Band" />
      </Head>
      <Header rootClassName="rootClassName3"></Header>
      <PageTitle>
        <h1>Purchase Songs</h1>
      </PageTitle>
      <PurchaseSongContainer>
        <PurchaseSongs>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs>
        <PurchaseSongs1>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs1>
        <PurchaseSongs2>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs2>
        <PurchaseSongs3>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs3>
        <PurchaseSongs4>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs4>
        <PurchaseSongs5>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs5>
        <PurchaseSongs6>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs6>
        <PurchaseSongs7>
          <SongPurchaseView></SongPurchaseView>
        </PurchaseSongs7>
      </PurchaseSongContainer>
      <Footer rootClassName="rootClassName3"></Footer>
    </Container>
  )
}

export default User

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'flex-start',
})

const PageTitle = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '100px',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
})

const PurchaseSongContainer = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '100%',
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
})

const PurchaseSongs = styled('div')({
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

const PurchaseSongs1 = styled('div')({
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

const PurchaseSongs2 = styled('div')({
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

const PurchaseSongs3 = styled('div')({
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

const PurchaseSongs4 = styled('div')({
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

const PurchaseSongs5 = styled('div')({
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

const PurchaseSongs6 = styled('div')({
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

const PurchaseSongs7 = styled('div')({
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
