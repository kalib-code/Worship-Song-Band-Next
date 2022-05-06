import React from 'react'
import Head from 'next/head'

const Tracks = (props) => {
  return (
    <>
      <div className="tracks-container">
        <Head>
          <title>Tracks - Worship Song Band</title>
          <meta property="og:title" content="Tracks - Worship Song Band" />
        </Head>
      </div>
      <style jsx>
        {`
          .tracks-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Tracks
