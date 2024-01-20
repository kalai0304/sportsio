import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
// import { Link } from 'react-router-dom'
const ResetPassword = () => {
    return (
        <>
            <Meta title="Reset-Password" />
            <BreadCromp title='Reset-Password' />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-12 mb-2 mt-4'>
                                <div>
                                    <input className='form-control'
                                        type='password'
                                        name='password'
                                        placeholder='Password'>
                                    </input>
                                </div>
                                <div>
                                    <input className='form-control'
                                        type='password'
                                        name='confimpassword'
                                        placeholder='Confirm Password'>
                                    </input>
                                </div>
                                <div>
                                    <div className=' mt-3 d-flex align-items-center justify-content-center gap-10'>
                                        <button className='button' type='submit'>OK</button>
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

export default ResetPassword