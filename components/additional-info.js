import React from 'react'

import PropTypes from 'prop-types'

const AdditionalInfo = (props) => {
  return (
    <>
      <div className="additional-info-container">
        <span className="additional-info-text">{props.genresText}</span>
        <span className="additional-info-text1">{props.themeText}</span>
        <span className="additional-info-text2">{props.wirterText}</span>
        <span className="additional-info-text3">{props.yearText}</span>
        <span className="additional-info-text4">{props.mtIdText}</span>
        <span className="additional-info-text5">{props.copyRightsText}</span>
      </div>
      <style jsx>
        {`
          .additional-info-container {
            flex: 0 0 auto;
            width: 300px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #f7f5e9;
          }
          .additional-info-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .additional-info-text1 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .additional-info-text2 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .additional-info-text3 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .additional-info-text4 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .additional-info-text5 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

AdditionalInfo.defaultProps = {
  yearText: 'Year: 2019',
  copyRightsText: '℗ 2019 Hanna Ford',
  wirterText: 'Writers: Hanna Ford',
  genresText: 'Genres: CHRISTMAS, MALE LEAD',
  mtIdText: 'mtID: 14610',
  themeText: 'Themes: BLESSING, CHRISTMAS, JOY',
}

AdditionalInfo.propTypes = {
  yearText: PropTypes.string,
  copyRightsText: PropTypes.string,
  wirterText: PropTypes.string,
  genresText: PropTypes.string,
  mtIdText: PropTypes.string,
  themeText: PropTypes.string,
}

export default AdditionalInfo
