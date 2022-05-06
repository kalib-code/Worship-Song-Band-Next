import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SongPurchaseView from '../components/song-purchase-view'
import Footer from '../components/footer'

const User = (props) => {
  return (
    <>
      <div className="user-container">
        <Head>
          <title>user - Worship Song Band</title>
          <meta property="og:title" content="user - Worship Song Band" />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="user-page-title">
          <h1>Purchase Songs</h1>
        </div>
        <div className="user-purchase-song-container">
          <div className="user-purchase-songs">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs1">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs2">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs3">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs4">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs5">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs6">
            <SongPurchaseView></SongPurchaseView>
          </div>
          <div className="user-purchase-songs7">
            <SongPurchaseView></SongPurchaseView>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .user-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .user-page-title {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .user-purchase-song-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .user-purchase-songs {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs1 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs2 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs3 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs4 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs5 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs6 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .user-purchase-songs7 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          @media (max-width: 991px) {
            .user-purchase-songs {
              width: 100%;
            }
            .user-purchase-songs1 {
              width: 100%;
            }
            .user-purchase-songs2 {
              width: 100%;
            }
            .user-purchase-songs3 {
              width: 100%;
            }
            .user-purchase-songs4 {
              width: 100%;
            }
            .user-purchase-songs5 {
              width: 100%;
            }
            .user-purchase-songs6 {
              width: 100%;
            }
            .user-purchase-songs7 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .user-purchase-songs {
              border-radius: 20px;
            }
            .user-purchase-songs1 {
              border-radius: 20px;
            }
            .user-purchase-songs2 {
              border-radius: 20px;
            }
            .user-purchase-songs3 {
              border-radius: 20px;
            }
            .user-purchase-songs4 {
              border-radius: 20px;
            }
            .user-purchase-songs5 {
              border-radius: 20px;
            }
            .user-purchase-songs6 {
              border-radius: 20px;
            }
            .user-purchase-songs7 {
              border-radius: 20px;
            }
          }
          @media (max-width: 479px) {
            .user-purchase-songs {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs1 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs2 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs3 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs4 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs5 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs6 {
              padding: var(--dl-space-space-halfunit);
            }
            .user-purchase-songs7 {
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default User
