import React from 'react'
import x from '../../assets/x-wallpaper.svg'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon.png'
import google from '../../assets/google.png'
import '../LoginSignUp/LoginSignUp.css'
import './Welcome.css'
const Welcome = () => {
  return (
    <>
      <div className='welcome-wrapper'>
        <div className='welcome-container'>
          <div className='left-wallpaper'>
            <img src={x} alt='x-wallpaper' />
          </div>
          <div className='welcome-content'>
            <div className='welcome-container'>
              <div className='welcome-inner-content'>
                <div className='welcome-logo'>
                  <img src={icon} alt='twitter-icon' />
                </div>
                <h1>Happening now</h1>
                <h2>Join today.</h2>
                <div className='welcome-buttons-container'>
                  <div className='welcome-buttons'>
                    <a className='google-welcome'>
                      <p>sign in with google</p>
                      <img src={google} alt='google' />
                    </a>
                    <a className='apple-welcome'>
                      <i
                        className='fa-brands fa-apple'
                        style={{ color: '#000000' }}
                      ></i>
                      <p>Sign in with Apple</p>
                    </a>
                    <div className='login-line'>
                      <p>or</p>
                    </div>

                    <Link to='/signup' className='welcome-create'>
                      <p>Create account</p>
                    </Link>
                    <p className='terms-conditions'>
                      By signing up, you agree to the
                      <span>Terms of Service</span> and
                      <span>Privacy Policy</span> , including
                      <span>Cookie Use.</span>
                    </p>
                    <div className='welcome-signin'>
                      <h4>Already have an account?</h4>
                      <Link to='/login' className='welcome-login'>
                        <p>Sign in</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>About this project & about me</p>
          <p> &#169; 2023 Z Corp. </p>
        </footer>
      </div>
    </>
  )
}

export default Welcome
