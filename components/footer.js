import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '../pages/style'

const Footer = (props) => {
  return (
    <StyledFooter compVariant={props.rootClassName}>
      <Container>
        <Image alt={props.image_alt} src={props.image_src} />
        <Text>{props.text}</Text>
      </Container>
      <Container1>
        <Text1>{props.text1}</Text1>
        <IconGroup>
          <Icon viewBox="0 0 950.8571428571428 1024">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </Icon>
          <Icon2 viewBox="0 0 602.2582857142856 1024">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </Icon2>
          <Icon4 viewBox="0 0 1024 1024">
            <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
          </Icon4>
        </IconGroup>
      </Container1>
      <Container2>
        <Text2>{props.title_text}</Text2>
        <Text3>{props.news_letter}</Text3>
        <Form>
          <Input
            type="text"
            placeholder={props.Input_placeholder}
            projVariant="input"
          />
          <Button projVariant="button">{props.button}</Button>
        </Form>
      </Container2>
    </StyledFooter>
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
  },
})

const StyledFooter = styled('footer')(componentStyleVariants, {
  width: '100%',
  display: 'flex',
  'max-width': '100%',
  position: 'relative',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceTwounits,
  'padding-left': TOKENS.DlSpaceSpaceThreeunits,
  'padding-right': TOKENS.DlSpaceSpaceThreeunits,
  'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  'justify-content': 'space-between',
  'background-color': '#000000',
  '@media(max-width: 991px)': {
    width: '990px',
    'flex-direction': 'column',
  },
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceTwounits,
    'padding-right': TOKENS.DlSpaceSpaceTwounits,
    'flex-direction': 'column',
  },
  '@media(max-width: 479px)': {
    padding: TOKENS.DlSpaceSpaceUnit,
    'flex-direction': 'column',
  },
})

const Container = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  '@media(max-width: 991px)': {
    'align-items': 'center',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 767px)': {
    'align-items': 'center',
    'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  },
})

const Image = styled('img')({
  width: '200px',
  'object-fit': 'cover',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text = styled('span')({
  color: '#ffffff',
  '@media(max-width: 767px)': {
    'text-align': 'center',
    'margin-left': TOKENS.DlSpaceSpaceUnit,
    'margin-right': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 479px)': {
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
})

const Container1 = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  '@media(max-width: 991px)': {
    'align-items': 'center',
    'margin-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  },
})

const Text1 = styled('span')({
  color: '#ffffff',
  'font-size': '1.3em',
  'font-style': 'normal',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const IconGroup = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'row',
  'justify-content': 'space-between',
})

const Icon = styled('svg')({
  fill: '#f7f5f5',
  width: '30px',
  height: '30px',
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
})

const Icon2 = styled('svg')({
  fill: '#f5efef',
  width: '30px',
  height: '30px',
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
})

const Icon4 = styled('svg')({
  fill: '#f9f8f8',
  width: '30px',
  height: '30px',
})

const Container2 = styled('div')({
  flex: '0 0 auto',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  '@media(max-width: 991px)': {
    'align-items': 'center',
  },
  '@media(max-width: 479px)': {
    display: 'none',
  },
})

const Text2 = styled('span')({
  color: '#ffffff',
  'font-size': '2em',
  'font-style': 'normal',
  'font-weight': '700',
  '@media(max-width: 479px)': {
    'font-size': '1em',
  },
})

const Text3 = styled('span')({
  color: '#ffffff',
  'font-size': '1em',
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Form = styled('form')({
  height: '38px',
  '@media(max-width: 767px)': {
    'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
  },
  '@media(max-width: 479px)': {
    'align-self': 'center',
  },
})

const Input = styled('input')(projectStyleVariants, {
  'border-radius': '20px',
})

const Button = styled('button')(projectStyleVariants, {
  'border-width': '0px',
  'border-radius': '20px',
  'background-color': TOKENS.DlColorDanger300,
})

Footer.defaultProps = {
  image_alt: 'image',
  button: 'Subcribe',
  text1: 'Follow us!',
  title_text: 'NEWSLETTER',
  Input_placeholder: 'placeholder',
  image_src: '/playground_assets/ws_ogo-200h.png',
  rootClassName: '',
  text: '© 2021 WorshipSong Band, All Rights Reserved.',
  news_letter: 'Join our mailing list to receive our latest news!',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  title_text: PropTypes.string,
  Input_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  news_letter: PropTypes.string,
}

export default Footer
