import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Header from '../components/header'
import SongListView from '../components/song-list-view'
import Footer from '../components/footer'
import { projectStyleVariants, TOKENS } from './style'

const Store = (props) => {
  return (
    <Container>
      <Head>
        <title>Store - Worship Song Band</title>
        <meta property="og:title" content="Store - Worship Song Band" />
      </Head>
      <Header rootClassName="rootClassName"></Header>
      <PageTitleContainer>
        <h1>WorshipSong Store</h1>
      </PageTitleContainer>
      <StoreContainer>
        <FilterSongContainer></FilterSongContainer>
        <SonglistContainer>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <SongListView></SongListView>
          <PaginationButton>
            <PrevButton projVariant="button">Previous</PrevButton>
            <NextButton projVariant="button">Next</NextButton>
          </PaginationButton>
        </SonglistContainer>
      </StoreContainer>
      <Footer rootClassName="rootClassName"></Footer>
    </Container>
  )
}

export default Store

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  'justify-content': 'space-between',
})

const PageTitleContainer = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: '100px',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
})

const StoreContainer = styled('div')({
  flex: '1',
  width: '100%',
  height: '100%',
  display: 'grid',
  'grid-gap': '10px',
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceThreeunits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'grid-auto-rows': 'minmax(100px, auto)',
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'grid-template-columns': '1fr 3fr ',
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': TOKENS.DlSpaceSpaceUnit,
  },
})

const FilterSongContainer = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  border: '2px dashed rgba(120, 120, 120, 0.4)',
  height: '100px',
  display: 'flex',
  'flex-direction': 'column',
})

const SonglistContainer = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
})

const PaginationButton = styled('div')({
  flex: '0 0 auto',
  width: '70%',
  display: 'flex',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'align-items': 'center',
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'margin-right': TOKENS.DlSpaceSpaceHalfunit,
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'space-between',
})

const PrevButton = styled('button')(projectStyleVariants, {
  transition: '0.3s',
  'border-width': '0px',
  'background-color': TOKENS.DlColorPrimaryMaroon,
  '&:disabled': {
    'background-color': '#bdbdbd',
  },
})

const NextButton = styled('button')(projectStyleVariants, {
  transition: '0.3s',
  '&:disabled': {
    'background-color': '#bdbdbd',
  },
})
