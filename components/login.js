import React from 'react'

import { variant } from 'styled-system'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '../pages/style'

const Login = (props) => {
  return (
    <StyledLogin compVariant={props.rootClassName}>
      <Form>
        <Textinput
          type="text"
          placeholder={props.textinput_placeholder}
          projVariant="input"
        />
        <Textinput1
          type="text"
          placeholder={props.textinput_placeholder1}
          projVariant="input"
        />
        <Button projVariant="button">{props.ButtonType}</Button>
      </Form>
    </StyledLogin>
  )
}

const componentStyleVariants = variant({
  prop: 'compVariant',
  variants: {
    rootClassName: {
      width: '350px',
    },
  },
})

const StyledLogin = styled('div')(componentStyleVariants, {
  flex: '0 0 auto',
  width: '50%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceOneandhalfunits,
  'align-items': 'center',
  'flex-direction': 'column',
})

const Form = styled('form')({
  width: '350px',
  'align-self': 'center',
})

const Textinput = styled('input')(projectStyleVariants, {
  width: '348px',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Textinput1 = styled('input')(projectStyleVariants, {
  width: '350px',
  'margin-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
})

const Button = styled('button')(projectStyleVariants, {
  width: '350px',
  'text-align': 'center',
})

Login.defaultProps = {
  ButtonType: 'SIGN IN',
  textinput_placeholder: 'placeholder',
  rootClassName: '',
  textinput_placeholder1: 'placeholder',
}

Login.propTypes = {
  ButtonType: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
}

export default Login
