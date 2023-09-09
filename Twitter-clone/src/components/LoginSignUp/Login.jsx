import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './LoginSignUp.css'
import icon from '../../assets/icon.png'
import google from '../../assets/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { user } from '../../features/LoginSlice'
const Login = () => {
  const [focus, setFocus] = useState(false)
  const [focusPwd, setFocusPwd] = useState(false)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [showNext, setShowNext] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (pwd.length > 2) {
      setErrorMsg('')
    }
  }, [pwd])
  // SIGN IN FUNCTION WITH AXIOS
  const auth = 'https://twitter-clone-backend-8aw8.onrender.com/twitter/clone/auth'
  const login = axios.create({
      baseURL: auth,
    })
  const signIn = async ()=>{
      try {
        console.log('sign in request sent')
        const response = await login.post('/login', {
          email: email,
          password: pwd,
        })
        const token = response.data.token
        const loggedInUser = response.data.user
        if (!token) {
          setErrorMsg('something went wrong please try again')
          return
        }
        localStorage.setItem('usertoken', token)
        dispatch(user(loggedInUser))
        console.log(loggedInUser)
        navigate('/home')
      } 
      catch (error) {
        console.log(error)
        setErrorMsg(error.response.data.msg)
      }
    
  }
  return (
    <div className='login-wrapper'>
      <div
        className='login-container'
        onClick={() => {
          if (email.length < 1) {
            setFocus(false)
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
            <h2>Enter your password</h2>
          ) : (
            <h2>Sign in to Twitter</h2>
          )}
          {showNext || (
            <>
              <a className='google-login'>
                <p>sign in with google</p>
                <img src={google} alt='google' />
              </a>
              <a className='apple-login'>
                <i
                  className='fa-brands fa-apple'
                  style={{ color: '#000000' }}
                ></i>
                <p>Sign in with Apple</p>
              </a>
              <div className='login-line'>
                <p>or</p>
              </div>
            </>
          )}
          {/* EMAIL CONTAINER */}
          {
            <>
              <div
                className={
                  focus ? 'focus-email email-container' : 'email-container'
                }
                style={{
                  border: showNext && 'none',
                  backgroundColor: showNext && 'var(--twitter-light-dark)',
                }}
              >
                {!showNext ? (
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
                ) : (
                  <input
                    className='input'
                    style={{ pointerEvents: 'none' }}
                    type='text'
                    id='email'
                    disabled
                    value={email}
                  />
                )}
                <label
                  htmlFor='email'
                  className={focus ? 'focus' : 'label'}
                  style={{
                    color: showNext && 'var(--twitter-extra-light-dark)',
                  }}
                >
                  phone, email, or username
                </label>
              </div>
            </>
          }
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
              <p className='error-msg'>{errorMsg}</p>
            </>
          )}
          {/* NEXT SECTION */}
          <a
            className={showNext ? 'animate-next login-next' : 'login-next'}
            onClick={() => {
              if (email.length < 1) {
                setErrorMsg('please enter email')
                return
              }
              setShowNext(!showNext)
            }}
          >
            <p>Next</p>
          </a>
          {showNext && (
            <a className='login' onClick={signIn}>
              <p>Log in</p>
            </a>
          )}
          <p className='signup-text'>
            Don't have an account?
            <Link className='login-link' to='/signup'>
              <span> Sign up</span>
            </Link>
          </p>
        </div>
        {/* <div className="next-login">
        <p>Testing Next section</p>
        </div> */}
      </div>
    </div>
  )
}

export default Login
