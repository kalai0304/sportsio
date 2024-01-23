import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ForgotPassword = () => {
    return (
        <>
            <Meta title="Forgot Password" />
            <BreadCromp title='Forgot Password' />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <p className='text-center mb-3 para'>We will sent you an email to reset your password</p>
                            <form action='' className='d-flex flex-column gap-10 mb-2 mt-5'>
                                <CustomInput
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                />
                                <div>
                                    {/* <Link to='/forgot-password' className='mt-3'>Forgot Password!</Link> */}
                                    <div className=' mt-3 d-flex align-items-center flex-column justify-content-center gap-10'>
                                        <button className='button mt-3' type='submit'>Submit</button>
                                        <Link to='/login' className='mt-1 cancel text-center'>Cancel</Link>
                                        {/* <button className='button Signup'>SignUp</button> */}
                                    </div>
                                    {/* <p className='mt-4 px-1'>Don't have account<Link to='/sign-up'>SignUp</Link></p> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default ForgotPassword