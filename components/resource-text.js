import React from 'react'

import PropTypes from 'prop-types'

const ResourceText = (props) => {
  return (
    <>
      <div className="resource-text-container">
        <span className="resource-text-resource-text">{props.typeTitle}</span>
      </div>
      <style jsx>
        {`
          .resource-text-container {
            width: 100%;
            display: flex;
            position: relative;
          }
          .resource-text-resource-text {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            padding-top: 5px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 5px;
            background-color: var(--dl-color-primary-maroon);
          }
        `}
      </style>
    </>
  )
}

ResourceText.defaultProps = {
  typeTitle: 'Multi-Tracks',
}

ResourceText.propTypes = {
  typeTitle: PropTypes.string,
}

export default ResourceText
