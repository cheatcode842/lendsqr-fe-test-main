import { useState } from 'react';
import logo from '../assets/lendsqr-logo.svg';
import hero from '../assets/pablo-sign-in.svg';

const LoginPage = () => {
  const [showPassword, setShopPassword] = useState(false);

  return (
    <div className='container login'>
      <section className='login__hero'>
        <div className='login__hero--logo'>
          <img aria-label='Sign in hero image' alt='Sign in hero' src={logo} />
        </div>

        <div className='login__hero--img'>
          <img aria-label='Lendsqr Logo' alt='Sign in hero' src={hero} />
        </div>
      </section>

      {/* form component */}
      <section className='login__form'>
        <div className='title'>
          <h1 className='text-6xl'>Welcome!</h1>
          <p className='text-xl'>Enter details to login</p>
        </div>
        <div className='form'>
          <div>
            <input className='input' type='email' placeholder='Email' />
          </div>

          <div className='passwordContainer'>
            <input
              className='input'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            {showPassword ? (
              <button className='btn text-xl' onClick={() => setShopPassword(!showPassword)}>
                Show
              </button>
            ) : (
              <button className='btn text-xl' onClick={() => setShopPassword(!showPassword)}>
                Hide
              </button>
            )}
          </div>
          <div>
            <button className='btn btn--forgot-password text-xl'>Forgot Password?</button>
          </div>
          <div>
            <button className='btn btn--login text-3xl'>Log In</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
