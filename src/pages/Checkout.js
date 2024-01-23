import React from 'react'
import Meta from '../components/Meta';
import BreadCromp from '../components/BreadCromp';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import watch from '../images/watch.jpg'
import Container from '../components/Container';
const Checkout = () => {
    return (
        <>
            <Meta title="Checkout" />
            <BreadCromp title='Checkout' />
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Sports-io</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label='breadcrumb'
                                >
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'>
                                            <Link href='/cart'>Cart</Link>
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item active total-price' aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item total-price'>
                                           Shipping
                                        </li>
                                        &nbsp; /
                                        <li className='breadcrumb-item active total-price' aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className='title total'>Contact Information</h4>
                                <p className='user-details total'>
                                    Kalaiyarasan k (717821p126@kce.ac.in)
                                </p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form className='gap-10 d-flex flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <select name=''
                                            className='form-control form-select'>
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='First Name' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last Name' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Apartment, suit, etc.' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='City' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name=''
                                            className='form-control form-select'>
                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='ZIP code' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='me-2'/> Return to Cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-5 align-items-center'>
                                    <div className='w-75 d-flex gap-10 mb-2'>
                                        <div className='w-25 position-relative'>
                                            <span style={{top:"-10px",right:"2px"}}
                                            className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                            <img className='img-fluid' src={watch} alt='product image'/>
                                        </div>
                                        <div>
                                            <h5 className='total-price'>product title</h5>
                                            <p className='total-price'>s / #aflind</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>₹500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>₹500</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>₹500</p>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>₹1000</h5>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Checkout