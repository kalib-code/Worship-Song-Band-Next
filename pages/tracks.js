import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Tracks = (props) => {
  return (
    <>
      <div className="tracks-container">
        <Head>
          <title>Tracks - Worship Song Band</title>
          <meta property="og:title" content="Tracks - Worship Song Band" />
        </Head>
        <Header rootClassName="header-root-class-name7"></Header>
        <div className="tracks-container1">
          <span>Test</span>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .tracks-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .tracks-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Tracks
