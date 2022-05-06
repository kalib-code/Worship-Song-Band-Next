import React from 'react'

import PropTypes from 'prop-types'

import ResourceText from './resource-text'

const SongPurchaseView = (props) => {
  return (
    <>
      <div className="song-purchase-view-song-container">
        <div className="song-purchase-view-title-container">
          <span className="song-purchase-view-title-text">
            {props.song_title}
          </span>
        </div>
        <div className="song-purchase-view-album-container">
          <span>{props.song_album_text}</span>
        </div>
        <div className="song-purchase-view-artist-container">
          <span className="song-purchase-view-artist-text">
            {props.artist_text}
          </span>
        </div>
        <div className="song-purchase-view-resource-container">
          <ResourceText></ResourceText>
        </div>
      </div>
      <style jsx>
        {`
          .song-purchase-view-song-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
          }
          .song-purchase-view-title-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            word-wrap: break-word;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .song-purchase-view-title-text {
            font-size: 1em;
            font-style: normal;
            font-weight: 700;
          }
          .song-purchase-view-album-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            word-wrap: break-word;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .song-purchase-view-artist-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .song-purchase-view-artist-text {
            font-style: normal;
            font-weight: 400;
          }
          .song-purchase-view-resource-container {
            flex: 0 0 auto;
            width: 25%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .song-purchase-view-song-container {
              align-items: stretch;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .song-purchase-view-song-container {
              flex-direction: column;
            }
            .song-purchase-view-title-container {
              width: 100%;
            }
            .song-purchase-view-album-container {
              width: 100%;
            }
            .song-purchase-view-artist-container {
              width: 100%;
            }
            .song-purchase-view-resource-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .song-purchase-view-title-container {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .song-purchase-view-album-container {
              padding-bottom: 0px;
            }
            .song-purchase-view-artist-container {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

SongPurchaseView.defaultProps = {
  song_title: 'Song Title Here',
  artist_text: 'Name of Artist here',
  song_album_text: 'Song Album',
}

SongPurchaseView.propTypes = {
  song_title: PropTypes.string,
  artist_text: PropTypes.string,
  song_album_text: PropTypes.string,
}

export default SongPurchaseView
