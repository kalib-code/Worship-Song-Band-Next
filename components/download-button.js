import React from 'react'

import PropTypes from 'prop-types'

const DownloadButton = (props) => {
  return (
    <>
      <div className="download-button-container">
        <button className="download-button-button button">
          {props.button1}
        </button>
      </div>
      <style jsx>
        {`
          .download-button-container {
            display: flex;
            position: relative;
          }
          .download-button-button {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
        `}
      </style>
    </>
  )
}

DownloadButton.defaultProps = {
  button1: 'Download',
}

DownloadButton.propTypes = {
  button1: PropTypes.string,
}

export default DownloadButton
