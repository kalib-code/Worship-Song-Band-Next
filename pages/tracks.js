import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'
import { TOKENS } from './style'

const Tracks = (props) => {
  return (
    <Container>
      <Head>
        <title>Tracks - Worship Song Band</title>
        <meta property="og:title" content="Tracks - Worship Song Band" />
      </Head>
      <Header rootClassName="rootClassName7"></Header>
      <Container1></Container1>
      <Footer rootClassName="rootClassName6"></Footer>
      <Header></Header>
    </Container>
  )
}

export default Tracks

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  'justify-content': 'flex-start',
})

const Container1 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  border: '2px dashed rgba(120, 120, 120, 0.4)',
  height: TOKENS.DlSizeSizeMaxwidth,
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
})
