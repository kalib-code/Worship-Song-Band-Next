import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Header from '../components/header'
import SongInfos from '../components/song-infos'
import PriceDetails from '../components/price-details'
import AdditionalInfo from '../components/additional-info'
import Footer from '../components/footer'
import { TOKENS } from './style'

const StoreSingleView = (props) => {
  return (
    <Container>
      <Head>
        <title>StoreSingleView - Worship Song Band</title>
        <meta
          property="og:title"
          content="StoreSingleView - Worship Song Band"
        />
      </Head>
      <Header rootClassName="rootClassName1"></Header>
      <Container1>
        <DetailsSection>
          <SongInfos></SongInfos>
          <PriceDetails></PriceDetails>
        </DetailsSection>
        <Container2>
          <span>
            <span>Verse 1</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Joy to the world the Lord is come</span>
            <br></br>
            <span>Let earth receive her King</span>
            <br></br>
            <span>Let every heart prepare Him room</span>
            <br></br>
            <span>And Heaven and nature sing</span>
            <br></br>
            <span>And Heaven and nature sing</span>
            <br></br>
            <span>And Heaven and Heaven</span>
            <br></br>
            <span>And nature sing</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span>Joy to the world</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Verse 2</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Joy to the world the Savior reigns</span>
            <br></br>
            <span>Let men their songs employ</span>
            <br></br>
            <span>While fields and floods</span>
            <br></br>
            <span>Rocks hills and plains</span>
            <br></br>
            <span>Repeat the sounding joy</span>
            <br></br>
            <span>Repeat the sounding joy</span>
            <br></br>
            <span>Repeat repeat</span>
            <br></br>
            <span>The sounding joy</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span>Joy to the world</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Verse 3</span>
            <br></br>
            <span></span>
            <br></br>
            <span>He rules the world with truth and grace</span>
            <br></br>
            <span>And makes the nations prove</span>
            <br></br>
            <span>The glories of His righteousness</span>
            <br></br>
            <span>And wonders of His love</span>
            <br></br>
            <span>And wonders of His love</span>
            <br></br>
            <span>And wonders</span>
            <br></br>
            <span>Wonders of His love</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span>Joy to the world</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Chorus</span>
            <br></br>
            <span></span>
            <br></br>
            <span>We will sing sing sing</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Bridge</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Joyful joyful we adore Thee</span>
            <br></br>
            <span>God of glory Lord of love</span>
            <br></br>
            <span>Hearts unfold like flowers before Thee</span>
            <br></br>
            <span>Opening to the sun above</span>
          </span>
          <AdditionalInfo></AdditionalInfo>
        </Container2>
      </Container1>
      <Footer rootClassName="rootClassName1"></Footer>
    </Container>
  )
}

export default StoreSingleView

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'center',
  'padding-top': '0px',
  'flex-direction': 'column',
  'padding-bottom': '0px',
  'justify-content': 'flex-start',
})

const Container1 = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceFourunits,
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceFourunits,
  'justify-content': 'space-between',
  '@media(max-width: 767px)': {
    'align-items': 'flex-end',
    'flex-direction': 'column',
  },
  '@media(max-width: 479px)': {
    'align-items': 'flex-end',
    'flex-direction': 'column',
  },
})

const DetailsSection = styled('div')({
  flex: '0 0 auto',
  height: '100%',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    'align-items': 'flex-end',
    'flex-direction': 'column',
  },
  '@media(max-width: 479px)': {
    'align-items': 'flex-end',
    'flex-direction': 'column',
  },
})

const Container2 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'flex-start',
  'justify-content': 'space-between',
  '@media(max-width: 479px)': {
    'flex-direction': 'column',
  },
})
