import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SongListView from '../components/song-list-view'
import Footer from '../components/footer'

const Store = (props) => {
  return (
    <>
      <div className="store-container">
        <Head>
          <title>Store - Worship Song Band</title>
          <meta property="og:title" content="Store - Worship Song Band" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="store-page-title-container">
          <h1>WorshipSong Store</h1>
        </div>
        <div className="store-store-container">
          <div className="store-filter-song-container"></div>
          <div className="store-songlist-container">
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
            <div className="store-pagination-button">
              <button className="store-prev-button button">Previous</button>
              <button className="store-next-button button">Next</button>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .store-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .store-page-title-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .store-store-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: grid;
            grid-gap: 10px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            grid-auto-rows: minmax(100px, auto);
            padding-bottom: var(--dl-space-space-threeunits);
            grid-template-columns: 1fr 3fr;
          }
          .store-filter-song-container {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            flex-direction: column;
          }
          .store-songlist-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .store-pagination-button {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .store-prev-button {
            transition: 0.3s;
            border-width: 0px;
            background-color: var(--dl-color-primary-maroon);
          }
          .store-prev-button:disabled {
            background-color: #bdbdbd;
          }
          .store-next-button {
            transition: 0.3s;
          }
          .store-next-button:disabled {
            background-color: #bdbdbd;
          }
          @media (max-width: 767px) {
            .store-store-container {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Store
