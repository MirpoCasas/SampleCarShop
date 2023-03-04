import React, { useState } from 'react';
import svgs from '../../assets/svg/svgs';
import "./Login.css"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data)
    reset(defaultValues)
  }
  const defaultValues = { email: "", password: "" }

  return (
    <div className='Login'>
      <div className='container-login'>
        <div className='login-controllers'>
          <h1>Sign in</h1>
        </div>
        <div className='container-fast_login'>

          <div className='facebook-login login-fast'>
            <img src={svgs.facebookIcon} className='svg-facebook' />
            Sign in with Facebook
          </div>
          <div className='google-login login-fast'>
            <img src={svgs.googleIcon} className='svg-google' />
            Sign in with google
          </div>
          <div className='aple-login login-fast'>
            <img src={svgs.appleIcon} className='svg-apple' />
            Sign in with apple
          </div>
        </div>

        <div className='login-divider'>
          <div></div>
          <div><p>or</p>
          </div>
          <div></div>
        </div>

        <div className='login-form'>
          <form onSubmit={handleSubmit(submit)} className='form'>
            <input className='login-fast' type="email" placeholder='Email'{...register("email")} />
            <input className='login-fast' type="password" placeholder='Password' {...register("password")} />
            <p className='pass-description'>Enter a minimum of 8 characters</p>

            <button className='button-login login-fast' >Sign in</button>

          </form>
          <div className='container-texts'>
            <p className='text-tyc'>By signing up, you agree to our <a className='important-text' >Privacy Statement</a> and <a className='important-text'>Terms of Service</a></p>

            <div className='redirections-links'>
              <a className='text_resetPass important-text'>Forgot password</a>

              <Link to={'/signup'}>Create Acount</Link>

              <p>Are you a <a><span className='important-text'>dealer</span></a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;