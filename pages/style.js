import { variant } from 'styled-system'

export const TOKENS = {
  DlRadiusRadiusRadius4: '4px',
  DlRadiusRadiusRadius8: '8px',
  DlColorSuccess700: '#4CC366',
  DlSpaceSpaceThreeunits: '48px',
  DlColorGrayBlack: '#000000',
  DlColorPrimaryDarkgold: '#a38654ff',
  DlColorDanger500: '#BF2626',
  DlColorPrimaryGold: '#cab96bff',
  DlSpaceSpaceTwounits: '32px',
  DlColorDanger700: '#E14747',
  DlColorGray700: '#999999',
  DlSpaceSpaceOneandhalfunits: '24px',
  DlColorSuccess300: '#199033',
  DlColorDanger300: '#A22020',
  DlSpaceSpaceUnit: '16px',
  DlSizeSizeSmall: '48px',
  DlSizeSizeXlarge: '192px',
  DlColorSuccess500: '#32A94C',
  DlSizeSizeXxlarge: '288px',
  DlSizeSizeXsmall: '16px',
  DlColorGrayWhite: '#FFFFFF',
  DlRadiusRadiusRound: '50%',
  DlColorPrimaryMaroon: '#ba231bff',
  DlColorPrimaryWhite: '#ffffffff',
  DlSpaceSpaceSixunits: '96px',
  DlSpaceSpaceHalfunit: '8px',
  DlSpaceSpaceFiveunits: '80px',
  DlSpaceSpaceFourunits: '64px',
  DlSizeSizeLarge: '144px',
  DlRadiusRadiusRadius2: '2px',
  DlColorGray500: '#595959',
  DlSizeSizeMedium: '96px',
  DlSizeSizeMaxwidth: '1400px',
  DlColorGray900: '#D9D9D9',
}

export const projectStyleVariants = variant({
  prop: 'projVariant',
  variants: {
    teleportShow: {
      display: 'flex !important',
    },
    button: {
      color: TOKENS.DlColorGrayWhite,
      display: 'inline-block',
      padding: '0.5rem 1rem',
      'border-width': '1px',
      'border-radius': '5px',
      'background-color': '#bf5837',
    },
    list: {
      width: '100%',
      margin: '1em 0px 1em 0px',
      display: 'block',
      padding: '0px 0px 0px 1.5rem',
      'list-style-type': 'none',
      'list-style-position': 'outside',
    },
    listItem: {
      display: 'list-item',
    },
    input: {
      color: TOKENS.DlColorGrayBlack,
      cursor: 'auto',
      padding: '0.5rem 1rem',
      'border-color': TOKENS.DlColorGrayBlack,
      'border-width': '1px',
      'border-radius': '4px',
      'background-color': TOKENS.DlColorGrayWhite,
    },
    textarea: {
      color: TOKENS.DlColorGrayBlack,
      cursor: 'auto',
      padding: '0.5rem',
      'border-color': TOKENS.DlColorGrayBlack,
      'border-width': '1px',
      'border-radius': '4px',
      'background-color': TOKENS.DlColorGrayWhite,
    },
    teleportMenuBurger: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
    teleportMenuMobile: {
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100vh',
      'z-index': '100',
      display: 'none',
      padding: '32px',
      position: 'absolute',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      'background-color': '#fff',
    },
    teleportMenuClose: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
    heading: {
      'font-size': '32px',
      'font-family': 'Inter',
      'font-weight': '700',
      'line-height': '1.15',
      'text-transform': 'none',
      'text-decoration': 'none',
    },
    content: {
      'font-size': '16px',
      'font-family': 'Inter',
      'font-weight': '400',
      'line-height': '1.15',
      'text-transform': 'none',
      'text-decoration': 'none',
    },
  },
})
