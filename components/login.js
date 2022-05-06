import React from 'react'

import PropTypes from 'prop-types'

const Login = (props) => {
  return (
    <>
      <div className={`login-login ${props.rootClassName} `}>
        <form className="login-form">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="login-textinput input"
          />
          <input
            type="text"
            placeholder={props.textinput_placeholder1}
            className="login-textinput1 input"
          />
          <button className="login-button button">{props.ButtonType}</button>
        </form>
      </div>
      <style jsx>
        {`
          .login-login {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .login-form {
            width: 350px;
            align-self: center;
          }
          .login-textinput {
            width: 348px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-textinput1 {
            width: 350px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .login-button {
            width: 350px;
            text-align: center;
          }
          .login-root-class-name {
            width: 350px;
          }
        `}
      </style>
    </>
  )
}

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
