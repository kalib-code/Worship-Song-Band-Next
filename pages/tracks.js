import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Tracks = (props) => {
  return (
    <>
      <div className="tracks-container">
        <Head>
          <title>Tracks - Worship Song Band</title>
          <meta property="og:title" content="Tracks - Worship Song Band" />
        </Head>
        <Header rootClassName="header-root-class-name7"></Header>
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
        `}
      </style>
    </>
  )
}

export default Tracks
