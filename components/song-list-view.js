import React from 'react'

import PropTypes from 'prop-types'

import ResourceContainer from './resource-container'

const SongListView = (props) => {
  return (
    <>
      <div className={`song-list-view-song-list-view ${props.rootClassName} `}>
        <div className="song-list-view-image-container">
          <img
            alt={props.album_mage_alt}
            src={props.album_mage_src}
            className="song-list-view-album-mage"
          />
        </div>
        <div className="song-list-view-song-container">
          <div className="song-list-view-title-container">
            <span className="song-list-view-title-text">
              {props.title_text}
            </span>
          </div>
          <div className="song-list-view-artist-container">
            <span className="song-list-view-artist-text">
              {props.artist_text}
            </span>
          </div>
          <ResourceContainer></ResourceContainer>
        </div>
      </div>
      <style jsx>
        {`
          .song-list-view-song-list-view {
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
          .song-list-view-image-container {
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
          }
          .song-list-view-album-mage {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: 20px;
          }
          .song-list-view-song-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
          }
          .song-list-view-title-container {
            flex: 0 0 auto;
            width: 33.33%;
            display: flex;
            flex-wrap: wrap;
            word-wrap: break-word;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .song-list-view-title-text {
            font-size: 1em;
            font-style: normal;
            font-weight: 700;
          }
          .song-list-view-artist-container {
            flex: 0 0 auto;
            width: 33.33%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .song-list-view-artist-text {
            font-size: 1em;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .song-list-view-song-list-view {
              width: 100%;
            }
            .song-list-view-album-mage {
              align-self: center;
            }
            .song-list-view-song-container {
              align-items: stretch;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .song-list-view-song-list-view {
              border-radius: 20px;
            }
            .song-list-view-song-container {
              flex-direction: column;
            }
            .song-list-view-title-container {
              width: 100%;
            }
            .song-list-view-artist-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .song-list-view-song-list-view {
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

SongListView.defaultProps = {
  artist_text: 'Name of Artist here',
  rootClassName: '',
  album_mage_alt: 'image',
  title_text: 'Song Title Here',
  album_mage_src:
    'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNjQwNTI2MzUy&ixlib=rb-1.2.1&w=200',
}

SongListView.propTypes = {
  artist_text: PropTypes.string,
  rootClassName: PropTypes.string,
  album_mage_alt: PropTypes.string,
  title_text: PropTypes.string,
  album_mage_src: PropTypes.string,
}

export default SongListView
