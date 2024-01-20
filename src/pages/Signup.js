import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
// import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCromp title='Sign Up' />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              <form action='' className='d-flex flex-column gap-10 mb-2 mt-4'>
              <div>
                  <input className='form-control'
                    type='text'
                    name='name'
                    placeholder='Name'>
                  </input>
                </div>
                <div>
                  <input className='form-control'
                    type='email'
                    name='email'
                    placeholder='Email'>
                  </input>
                </div>
                <div>
                  <input className='form-control'
                    type='tel'
                    name='mobile'
                    placeholder='Mobile Number'>
                  </input>
                </div>
                <div>
                  <input className='form-control'
                    type='password'
                    name='password'
                    placeholder='Password'>
                  </input>
                </div>
                <div>
                  <div className=' mt-3 d-flex align-items-center justify-content-center gap-10'>
                    <button className='button' type='submit'>Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup