import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import Download from '../components/download'
import Footer from '../components/footer'
import { projectStyleVariants, TOKENS } from './style'

const Home = (props) => {
  return (
    <Container>
      <Head>
        <title>Worship Song Band</title>
        <meta property="og:title" content="Worship Song Band" />
      </Head>
      <Header></Header>
      <Hero>
        <Text>WORSHIPSONG BAND</Text>
        <Image
          alt="image"
          src="/playground_assets/group-1500h.jpg"
          loading="lazy"
        />
        <Text1>
          <span>
            <Text3>
              WorshipSong Band is designed to provide an innovative, flexible
              solution for worship leaders everywhere, especially in smaller
              churches or for solo worship leaders. It is a free, easy to use
              software application for IPad, Android, Mac, Chromebook, and
              Windows, and that provides ground-breaking capabilities
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Text3>
          </span>
        </Text1>
        <Button projVariant="button">Download</Button>
      </Hero>
      <Container1>
        <Iframe src="https://www.youtube.com/embed/qcJVbXq3SZM?start=7"></Iframe>
        <Container2></Container2>
      </Container1>
      <Features>
        <Container3>
          <FeatureCard
            title="MULTI-TRACKS"
            description="Seamless looping and jumping within songs. You can loop, skip sections, or directly go to verse/chorus all via touch screen or foot control, allowing you full control of your music, and save these arrangements in your set list."
            rootClassName="rootClassName"
          ></FeatureCard>
          <FeatureCard
            title="CHORD CHART"
            description="Complete songs and integrated chord charts and lyric backgrounds are distributed as a single, zip compressed file, allowing you to share tracks with any use."
            rootClassName="rootClassName7"
          ></FeatureCard>
          <FeatureCard
            title="LYRICS DISPLAY"
            description="Lyric display to an external monitor/TV, or Airplay, including background image, looping video, and multiple styles, fonts, and languages"
            rootClassName="rootClassName6"
          ></FeatureCard>
          <FeatureCard
            title="TEAM SHARING"
            description="Worshipsong Band's approach to music library management has always been governed by one idea - your music is owned by you, not in our cloud. Your library is held in a folder on your various devices, which you can manage as you wish. "
            rootClassName="rootClassName4"
          ></FeatureCard>
          <FeatureCard
            title="SYNC DEVICES"
            description="WorshipSong Band's networking is a way for the control, playback, and display functions to be distributed across a wireless network and run in a synchronized operation"
            rootClassName="rootClassName2"
          ></FeatureCard>
          <FeatureCard
            title="MIDI CONTROL"
            description="MIDI output capabilities, in an easy to use GUI, allowing complete control of lyrics and lights in 3rd partty applications like ProPresenter, Proclaim, or OnSong, or MIDI DMX lighting control software"
            rootClassName="rootClassName3"
          ></FeatureCard>
        </Container3>
      </Features>
      <Testimony>
        <Container4>
          <Text4>
            <span>
              The complete mobile multitrack player. Free, easy to use, and
              cross platform are just some of the many perks of WorshipSong Band
            </span>
          </Text4>
          <Text6>Worship Leader Magazine, Oct, 2013</Text6>
        </Container4>
      </Testimony>
      <Container5>
        <Text7>Available for Download</Text7>
        <Download></Download>
      </Container5>
      <Footer></Footer>
    </Container>
  )
}

export default Home

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
})

const Hero = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  position: 'relative',
  'align-self': 'center',
  'min-height': '80vh',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
  '@media(max-width: 991px)': {
    'flex-direction': 'column',
  },
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceTwounits,
    'padding-right': TOKENS.DlSpaceSpaceTwounits,
  },
  '@media(max-width: 479px)': {
    width: '100%',
    padding: TOKENS.DlSpaceSpaceTwounits,
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': TOKENS.DlSpaceSpaceUnit,
  },
})

const Text = styled('h1')({
  color: '#000000',
  'font-size': '3rem',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  '@media(max-width: 991px)': {
    'text-align': 'center',
  },
  '@media(max-width: 479px)': {
    'font-size': '2.3rem',
  },
})

const Image = styled('img')({
  width: '70%',
  'object-fit': 'cover',
})

const Text1 = styled('span')({
  color: TOKENS.DlColorGrayWhite,
  width: '75%',
  'align-self': 'center',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'text-align': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  '@media(max-width: 991px)': {
    'text-align': 'center',
  },
  '@media(max-width: 479px)': {
    'font-size': '12px',
  },
})

const Text3 = styled('span')({
  color: '#000000',
})

const Button = styled('button')(projectStyleVariants, {
  color: '#f7f2f2',
  'border-color': 'rgba(0, 0, 0, 0)',
  'border-width': '0px',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'background-color': TOKENS.DlColorDanger300,
})

const Container1 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  position: 'relative',
  'align-self': 'center',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceThreeunits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'justify-content': 'center',
})

const Iframe = styled('iframe')({
  width: '838px',
  height: '493px',
  'z-index': '100',
  '@media(max-width: 767px)': {
    width: '644px',
  },
  '@media(max-width: 479px)': {
    width: '100%',
  },
})

const Container2 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  bottom: '0px',
  height: '550px',
  display: 'flex',
  position: 'absolute',
  'margin-top': 'auto',
  'align-items': 'flex-start',
  'margin-left': 'auto',
  'margin-right': 'auto',
  'margin-bottom': '-275px',
  'flex-direction': 'column',
  'background-color': 'rgba(202, 185, 107, 0.3)',
  '@media(max-width: 767px)': {
    display: 'none',
  },
})

const Features = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  'max-width': TOKENS.DlSizeSizeMaxwidth,
  position: 'relative',
  'align-self': 'center',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceTwounits,
    'padding-right': TOKENS.DlSpaceSpaceTwounits,
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': TOKENS.DlSpaceSpaceUnit,
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Container3 = styled('div')({
  width: '100%',
  display: 'grid',
  'grid-gap': TOKENS.DlSpaceSpaceTwounits,
  'grid-template-columns': '1fr 1fr 1fr',
  '@media(max-width: 991px)': {
    'grid-template-columns': '1fr 1fr',
  },
  '@media(max-width: 479px)': {
    'grid-template-columns': '1fr',
  },
})

const Testimony = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  height: TOKENS.DlSizeSizeXxlarge,
  display: 'flex',
  'align-self': 'center',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceThreeunits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'padding-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'justify-content': 'center',
})

const Container4 = styled('div')({
  width: '762px',
  height: '154px',
  display: 'flex',
  padding: '0px',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceHalfunit,
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceHalfunit,
  'justify-content': 'center',
  'background-color': 'rgba(202, 185, 107, 0.15)',
})

const Text4 = styled('span')({
  width: '70%',
  'margin-top': '0px',
  'text-align': 'center',
  'padding-top': '0px',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  'padding-bottom': '0px',
})

const Text6 = styled('h3')({
  '@media(max-width: 479px)': {
    'font-size': '1em',
  },
})

const Container5 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-self': 'center',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceThreeunits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'justify-content': 'center',
})

const Text7 = styled('h2')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})
