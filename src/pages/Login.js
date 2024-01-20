import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <Meta title="Login" />
            <BreadCromp title='Login' />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap-10 mb-2'>
                                <div>
                                    <input className='form-control' 
                                    type='email'
                                    name='email'
                                    placeholder='Email'>
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
                                    <Link to='/forgot-password' className='mt-3'>Forgot Password!</Link>
                                    <div className=' mt-3 d-flex align-items-center justify-content-center gap-10'>
                                        <button className='button' type='submit'>Login</button>
                                        {/* <button className='button Signup'>SignUp</button> */}
                                    </div>
                                    <p className='mt-4 px-1'>Don't have account <Link to='/signup'>SignUp</Link></p>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login