import React, { useState } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login, signup } from '../store/actions/actions'
import Input from '../components/Common/Input/Input'
import { Button } from 'reactstrap'
import Spinner from '../components/Common/Spinner/Spinner'

const Auth = (props) => {
  const [controls, setControls] = useState({
    email: {
      valid: false,
      touched: false,
      value: "",
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "email",
      },
      validation: {
        isEmail: true,
        required: true,
      },
    },
    password: {
      elementType: 'input',
      valid: false,
      touched: false,
      value: '',
      elementConfig: {
        type: 'password',
        placeholder: 'password'
      },
      validation: {
        required: true,
        minLength: 6
      },
    }
  })

  const [isSignUp, setIsSignUp] = useState(false)

  const checkValidity = ( value, rules ) => {
    let isValid = true

    if(!rules) return true

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if ( rules.minLength ) {
      isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
      isValid = value.lenth <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      isValid = pattern.test(value) && isValid
    }

    return isValid
  }

  
  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        touched: true,
        valid: checkValidity( event.target.value, controls[controlName].validation )
      }
    }
    setControls(updatedControls)
  }
  
  let inputElementsArray = []
  // eslint-disable-next-line
  for (const key in controls) {
    inputElementsArray.push({
      id: key,
      config: controls[key]
    })
  }
  
  const toggleSignUp = () => {
    setIsSignUp(prevState => !prevState)
  }
  
  const loginHandler = (event) => {
    event.preventDefault()
    const email = controls.email.value
    const password = controls.password.value
    props.onLogin(email, password)
  }

  const signupHandler = e => {
    e.preventDefault()
    const email = controls.email.value
    const password = controls.password.value
    props.onSignup(email, password)
  }

  let error = null
  if ( props.errorMessage ) {
    error = <p style={{fontWeight: 'bold', fontSize: '1.2em'}}>{props.errorMessage}</p>
  }
  const form= (
    <form className="containter col-lg-6 col-sm-10 col-xs-12 m-auto">
      {error}
      {inputElementsArray.map(el => <Input 
        key={el.id}
        changed={event => inputChangedHandler(event, el.id)}
        value={el.config.value}
        invalid={!el.config.valid}
        touched={el.config.touched}
        elementConfig={el.config.elementConfig}
        elementType={el.config.elementType}
      />)}
      {isSignUp ? 
      <Button disabled={props.loading} color="outline-danger" onClick={signupHandler} className="m-2">signup</Button> : 
      <Button disabled={props.loading} color="success" className="m-2" onClick={loginHandler}>log in</Button>}
    </form>
  )  

  let redirect = null
  if ( props.token ) {
    redirect = <Redirect to="/singleview"/>
  }

  return (
    <div className="text-center">
      {redirect}
      {form}
      <p>Don't have any account? <a 
        style={{
          color: 'blue', 
          cursor: 'pointer',
        }}
      onClick={toggleSignUp}>{isSignUp ? 'Log in' : 'Sign up'}</a></p>
      {props.loading && <Spinner />}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    token: state.loginData.idToken,
    loading: state.loginData.loading,
    errorMessage: state.loginData.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
    onSignup: (email, password) => dispatch(signup(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)