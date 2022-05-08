import React from 'react'
import Link from 'next/link'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import DownloadButton from './download-button'
import { projectStyleVariants, TOKENS } from '../pages/style'

const Header = (props) => {
  return (
    <StyledHeader compVariant={props.rootClassName}>
      <Link href="/">
        <StyledLink>
          <Image alt={props.image_alt} src={props.image_src} />
        </StyledLink>
      </Link>
      <Nav>
        <NavigationLinks rootClassName="rootClassName1"></NavigationLinks>
      </Nav>
      <BtnGroup>
        <Link href="/login">
          <Link1 projVariant="button">{props.button}</Link1>
        </Link>
        <DownloadButton></DownloadButton>
      </BtnGroup>
      <MenuBurger projVariant="teleportMenuBurger">
        <Icon viewBox="0 0 1024 1024">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </Icon>
      </MenuBurger>
      <MenuMobile projVariant="teleportMenuMobile">
        <Nav1>
          <Container>
            <Image1 alt={props.image_alt1} src={props.image_src1} />
            <MenuClose projVariant="teleportMenuClose">
              <Icon02 viewBox="0 0 1024 1024">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </Icon02>
            </MenuClose>
          </Container>
          <NavigationLinks rootClassName="rootClassName"></NavigationLinks>
        </Nav1>
        <div>
          <Icon04 viewBox="0 0 950.8571428571428 1024">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </Icon04>
          <Icon06 viewBox="0 0 877.7142857142857 1024">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </Icon06>
          <Icon08 viewBox="0 0 602.2582857142856 1024">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </Icon08>
        </div>
      </MenuMobile>
    </StyledHeader>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {},
    rootClassName1: {},
    rootClassName2: {},
    rootClassName3: {},
    rootClassName4: {},
    rootClassName5: {},
    rootClassName6: {},
    rootClassName7: {},
  },
})

const StyledHeader = styled('header')(componentStyleVariants, {
  width: '100%',
  display: 'flex',
  'max-width': '100%',
  position: 'relative',
  'align-self': 'center',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceTwounits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  'justify-content': 'space-between',
  'background-color': '#ffffff',
  '@media(max-width: 991px)': {
    'box-shadow': '5px 5px 10px 0px #d4d4d4',
  },
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceTwounits,
    'padding-right': TOKENS.DlSpaceSpaceTwounits,
  },
  '@media(max-width: 479px)': {
    padding: TOKENS.DlSpaceSpaceUnit,
  },
})

const StyledLink = styled('a')({
  display: 'contents',
})

const Image = styled('img')({
  height: '2rem',
  'text-decoration': 'none',
})

const Nav = styled('div')({
  display: 'flex',
  '@media(max-width: 767px)': {
    display: 'none',
  },
})

const BtnGroup = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  '@media(max-width: 767px)': {
    display: 'none',
  },
})

const Link1 = styled('a')(projectStyleVariants, {
  color: '#0c0c0c',
  'border-width': '1px',
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
  'text-decoration': 'none',
  'background-color': 'transparent',
})

const MenuBurger = styled('div')(projectStyleVariants, {
  display: 'none',
  '@media(max-width: 767px)': {
    display: 'flex',
  },
})

const Icon = styled('svg')({
  width: TOKENS.DlSizeSizeXsmall,
  height: TOKENS.DlSizeSizeXsmall,
  display: 'none',
  '@media(max-width: 991px)': {
    display: 'flex',
  },
})

const MenuMobile = styled('div')(projectStyleVariants, {
  '@media(max-width: 479px)': {
    padding: '16px',
  },
})

const Nav1 = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
})

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  'align-items': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'justify-content': 'space-between',
})

const Image1 = styled('img')({
  height: '2rem',
})

const MenuClose = styled('div')(projectStyleVariants)

const Icon02 = styled('svg')({
  width: TOKENS.DlSizeSizeXsmall,
  height: TOKENS.DlSizeSizeXsmall,
})

const Icon04 = styled('svg')({
  width: TOKENS.DlSizeSizeXsmall,
  height: TOKENS.DlSizeSizeXsmall,
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
})

const Icon06 = styled('svg')({
  width: TOKENS.DlSizeSizeXsmall,
  height: TOKENS.DlSizeSizeXsmall,
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
})

const Icon08 = styled('svg')({
  width: TOKENS.DlSizeSizeXsmall,
  height: TOKENS.DlSizeSizeXsmall,
})

Header.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  button: 'Login',
  image_src: 'b0e8c0de-d9b4-4050-85be-fbad32a0bff0',
  image_alt: 'logo',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header
