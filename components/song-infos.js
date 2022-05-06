import React from 'react'

import PropTypes from 'prop-types'

const SongInfos = (props) => {
  return (
    <>
      <div className="song-infos-song-infos">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="song-infos-album-image"
        />
        <div className="song-infos-info-text-container">
          <span className="song-infos-title-text">{props.title_text}</span>
          <span className="song-infos-artist-text">{props.artist_text}</span>
          <span className="song-infos-type-text">{props.type_text}</span>
          <span className="song-infos-key-text">{props.key_text}</span>
          <span className="song-infos-bpm-text">{props.bpm_text}</span>
          <span className="song-infos-time-signature-text">
            {props.time_signature_text}
          </span>
          <span>{props.length_text}</span>
        </div>
        <svg viewBox="0 0 1024 1024" className="song-infos-icon">
          <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="song-infos-icon2">
          <path d="M621.714 676.571v-329.143c0-10.286-8-18.286-18.286-18.286h-329.143c-10.286 0-18.286 8-18.286 18.286v329.143c0 10.286 8 18.286 18.286 18.286h329.143c10.286 0 18.286-8 18.286-18.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .song-infos-song-infos {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .song-infos-album-image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: 20px;
          }
          .song-infos-info-text-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .song-infos-title-text {
            font-size: 1.5em;
            font-style: normal;
            font-weight: 600;
          }
          .song-infos-artist-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .song-infos-type-text {
            font-style: normal;
            font-weight: 700;
          }
          .song-infos-key-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .song-infos-bpm-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .song-infos-time-signature-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .song-infos-icon {
            fill: var(--dl-color-primary-maroon);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .song-infos-icon2 {
            fill: var(--dl-color-primary-gold);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 767px) {
            .song-infos-song-infos {
              width: 538px;
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .song-infos-song-infos {
              width: 100%;
              padding: 0px;
            }
            .song-infos-title-text {
              font-size: 1em;
            }
            .song-infos-artist-text {
              font-size: 1em;
            }
            .song-infos-icon {
              align-self: flex-start;
            }
            .song-infos-icon2 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

SongInfos.defaultProps = {
  artist_text: 'Hannah Ford - FAITH',
  key_text: 'Key:Db',
  time_signature_text: 'Time Sig:4/4',
  title_text: 'By Your Stripes',
  length_text: 'Length:4:11',
  image_alt: 'image',
  type_text: 'Orignal Master',
  image_src:
    'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=200',
  bpm_text: 'BPM:148',
}

SongInfos.propTypes = {
  artist_text: PropTypes.string,
  key_text: PropTypes.string,
  time_signature_text: PropTypes.string,
  title_text: PropTypes.string,
  length_text: PropTypes.string,
  image_alt: PropTypes.string,
  type_text: PropTypes.string,
  image_src: PropTypes.string,
  bpm_text: PropTypes.string,
}

export default SongInfos
