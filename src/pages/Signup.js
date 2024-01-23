import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
import Container from '../components/Container';
// import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCromp title='Sign Up' />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              <form action='' className='d-flex flex-column gap-10 mb-2 mt-4'>
                <CustomInput
                  type='text'
                  name='name'
                  placeholder='Name' />
                <CustomInput
                  type='email'
                  name='email'
                  placeholder='Email' />
                <CustomInput
                  type='tel'
                  name='mobile'
                  placeholder='Mobile Number' />
                <CustomInput
                  type='password'
                  name='password'
                  placeholder='Password' />
                <div>
                  <div className=' mt-3 d-flex align-items-center justify-content-center gap-10'>
                    <button className='button' type='submit'>Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup