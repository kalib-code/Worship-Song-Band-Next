import React from 'react'

import ResourceText from './resource-text'

const ResourceContainer = (props) => {
  return (
    <>
      <div className="resource-container-resource-container">
        <ResourceText></ResourceText>
      </div>
      <style jsx>
        {`
          .resource-container-resource-container {
            flex: 0 0 auto;
            width: 33.33%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 767px) {
            .resource-container-resource-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default ResourceContainer
