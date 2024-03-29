import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import Download from '../components/download'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Worship Song Band</title>
          <meta property="og:title" content="Worship Song Band" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <h1 className="home-text">WORSHIPSONG BAND</h1>
          <img
            alt="image"
            src="/playground_assets/group-1500h.jpg"
            loading="lazy"
            className="home-image"
          />
          <span className="home-text1">
            <span>
              <span className="home-text3">
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
              </span>
            </span>
          </span>
          <button className="home-button button">Download</button>
        </div>
        <div className="home-container1">
          <iframe
            src="https://www.youtube.com/embed/qcJVbXq3SZM?start=7"
            className="home-iframe"
          ></iframe>
          <div className="home-container2"></div>
        </div>
        <div className="home-features">
          <div className="home-container3">
            <FeatureCard
              title="MULTI-TRACKS"
              description="Seamless looping and jumping within songs. You can loop, skip sections, or directly go to verse/chorus all via touch screen or foot control, allowing you full control of your music, and save these arrangements in your set list."
              rootClassName="feature-card-root-class-name"
            ></FeatureCard>
            <FeatureCard
              title="CHORD CHART"
              description="Complete songs and integrated chord charts and lyric backgrounds are distributed as a single, zip compressed file, allowing you to share tracks with any use."
              rootClassName="feature-card-root-class-name7"
            ></FeatureCard>
            <FeatureCard
              title="LYRICS DISPLAY"
              description="Lyric display to an external monitor/TV, or Airplay, including background image, looping video, and multiple styles, fonts, and languages"
              rootClassName="feature-card-root-class-name6"
            ></FeatureCard>
            <FeatureCard
              title="TEAM SHARING"
              description="Worshipsong Band's approach to music library management has always been governed by one idea - your music is owned by you, not in our cloud. Your library is held in a folder on your various devices, which you can manage as you wish. "
              rootClassName="feature-card-root-class-name4"
            ></FeatureCard>
            <FeatureCard
              title="SYNC DEVICES"
              description="WorshipSong Band's networking is a way for the control, playback, and display functions to be distributed across a wireless network and run in a synchronized operation"
              rootClassName="feature-card-root-class-name2"
            ></FeatureCard>
            <FeatureCard
              title="MIDI CONTROL"
              description="MIDI output capabilities, in an easy to use GUI, allowing complete control of lyrics and lights in 3rd partty applications like ProPresenter, Proclaim, or OnSong, or MIDI DMX lighting control software"
              rootClassName="feature-card-root-class-name3"
            ></FeatureCard>
          </div>
        </div>
        <div className="home-testimony">
          <div className="home-container4">
            <span className="home-text4">
              <span>
                The complete mobile multitrack player. Free, easy to use, and
                cross platform are just some of the many perks of WorshipSong
                Band
              </span>
            </span>
            <h3 className="home-text6">Worship Leader Magazine, Oct, 2013</h3>
          </div>
        </div>
        <div className="home-container5">
          <h2 className="home-text7">Available for Download</h2>
          <Download></Download>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: #000000;
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image {
            width: 70%;
            object-fit: cover;
          }
          .home-text1 {
            color: var(--dl-color-gray-white);
            width: 75%;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text3 {
            color: #000000;
          }
          .home-button {
            color: #f7f2f2;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-danger-300);
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-iframe {
            width: 838px;
            height: 493px;
            z-index: 100;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            bottom: 0px;
            height: 550px;
            display: flex;
            position: absolute;
            margin-top: auto;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: -275px;
            flex-direction: column;
            background-color: rgba(202, 185, 107, 0.3);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-testimony {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-container4 {
            width: 762px;
            height: 154px;
            display: flex;
            padding: 0px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: rgba(202, 185, 107, 0.15);
          }
          .home-text4 {
            width: 70%;
            margin-top: 0px;
            text-align: center;
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: 0px;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-text {
              text-align: center;
            }
            .home-text1 {
              text-align: center;
            }
            .home-container3 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-iframe {
              width: 644px;
            }
            .home-container2 {
              display: none;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 2.3rem;
            }
            .home-text1 {
              font-size: 12px;
            }
            .home-iframe {
              width: 100%;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-text6 {
              font-size: 1em;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
