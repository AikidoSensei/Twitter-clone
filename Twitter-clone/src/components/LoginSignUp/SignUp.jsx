import React, { useState, useEffect } from 'react'
import './LoginSignUp.css'
import icon from '../../assets/icon.png'
import google from '../../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { user } from '../../features/LoginSlice'
import axios from 'axios'
const Login = () => {
  const [focus, setFocus] = useState(false)
  const [nameFocus, setNameFocus] = useState(false)
  const [userNameFocus, setUserNameFocus] = useState(false)
  const [focusPwd, setFocusPwd] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const [showNext, setShowNext] = useState(false)
  const [errorMsg , setErrorMsg] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // VALIDATE MY FORM
  // const nameRegex = /^[a-zA-Z0-9]+$/;
  const usernameRegex = /^[a-z0-9_.]+$/

  const validate = (e_mail, pass_word, user_name, cb) => {
    if (!e_mail || !pass_word) {
      setErrorMsg('email or password can not be empty')
      localStorage.removeItem('usertoken')
      return
    }
    if (pass_word.length <= 4 && pass_word.length > 0) {
      setErrorMsg('password characters can not be less than 5')
      localStorage.removeItem('usertoken')
      return
    } 
    if(user_name.includes('@') || !user_name.match(usernameRegex)){
      setErrorMsg('enter a valid username')
      return;
    }
    else {
      cb()
    }
  }

// SIGN UP FUNCTION WITH AXIOS
const auth = 'http://localhost:3000/twitter/clone/auth'



const register = axios.create({
  baseURL: auth,
})
useEffect(()=>{
  if(email.length > 2 || name.length > 2){
    setErrorMsg('')
  }
  if(email.length >= 1){
    setFocus(true)
  }
},[email, name, userName, pwd ])

const signUp = ()=>{
  validate(email, pwd, userName,
 async () => {
    try {
      const response = await register.post('/register/', {name:name,email:email, username:userName, password:pwd})
      const token = response.data.token;
      const loggedInUser = response.data.user;
      if(!token){
        setErrorMsg('something went wrong please try again')
        return;
      }
      localStorage.setItem('usertoken', token);
      dispatch(user(loggedInUser))
      console.log(loggedInUser)
      navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }
  
  )
}

  return (
    <div className={'login-wrapper'}>
      <div
        className='login-container'
        onClick={() => {
          if (email.length < 1) {
            setFocus(false)
          }
          if (name.length < 1) {
            setNameFocus(false)
          }
          if (userName.length < 1) {
            setUserNameFocus(false)
          }
          if (pwd.length < 1) {
            setFocusPwd(false)
          } else return
        }}
      >
        <div
          className={
            showNext ? ' next-login-content login-content' : 'login-content'
          }
        >
          <img src={icon} alt='twitter-icon' />
          {showNext ? (
            <h2>Enter a username and password</h2>
          ) : (
            <h2>Create your account</h2>
          )}

          {/* NAME CONTAINER */}
          {showNext || (
            <div
              className={
                focus ? 'focus-email email-container' : 'email-container'
              }
            >
              <input
                className='input'
                type='text'
                id='email'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setNameFocus(true)
                }}
              />
              <label htmlFor='email' className={nameFocus ? 'focus' : 'label'}>
                Name
              </label>
            </div>
          )}
          {/* USERNAME SECTION */}
          {showNext && (
            <div
              className={
                focus ? 'focus-email email-container' : 'email-container'
              }
            >
              <input
                className='input'
                type='text'
                id='email'
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setUserNameFocus(true)
                }}
              />
              <label
                htmlFor='email'
                className={userNameFocus ? 'focus' : 'label'}
              >
                Username
              </label>
            </div>
          )}

          {/* EMAIL */}
          {showNext || (
            <>
              <div
                className={
                  focus ? 'focus-email email-container' : 'email-container'
                }
              >
                <input
                  className='input'
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setFocus(true)
                  }}
                />
                <label htmlFor='email' className={focus ? 'focus' : 'label'}>
                  Email
                </label>
              </div>
              {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            </>
          )}
          {/* PASSWORD CONTAINER */}

          {showNext && (
            <>
            <div className='password-container email-container'>
              <input
                className='input'
                value={pwd}
                type='password'
                id='password'
                onChange={(e) => {
                  setPwd(e.target.value)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setFocusPwd(true)
                }}
              />
              <label htmlFor='email' className={focusPwd ? 'focus' : 'label'}>
                password
              </label>
            </div>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            </>
          )}
          {/* SIGN UP SECTION */}
          {showNext ? (
            <a
              className='login-next'
              onClick={() => {
                if (pwd.length < 1 || userName.length < 1) {
                  setErrorMsg('please provide username and password')
                  return
                }
                signUp()
              }}
            >
              <p>sign up</p>
            </a>
          ) : (
            <a
              className='login-next'
              onClick={() => {
                if (email.length < 1 || name.length < 1) {
                  setErrorMsg('please provide name and email')
                  return
                }
                if (!email.includes('@') || !email.includes('.')) {
                  setErrorMsg('please enter a valid email address')
                  return
                }
                
                setShowNext(true)
              }}
            >
              <p>next</p>
            </a>
          )}
          <p className='signup-text'>
            Sign in instead
            <Link className='login-link' to='/login'>
              <span> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
