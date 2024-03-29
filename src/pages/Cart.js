import React from 'react'
import Meta from '../components/Meta';
import BreadCromp from '../components/BreadCromp';
import watch from '../images/watch.jpg'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Meta title="Cart" />
            <BreadCromp title='Cart' />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 d-flex align-items-center gap-5'>
                                    <div className='w-25'>
                                        <img
                                            src={watch}
                                            className='img-fluid'
                                            alt='watch-image'
                                        />
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='title'>product titile</h5>
                                        <p>About</p>
                                        <p className='size'>Size: S</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>₹500</h5>
                                </div>
                                <div className='cart-col-3  d-flex align-items-center gap-5'>
                                    <div>
                                        <input
                                        className='form-control'
                                        type='number'
                                        min={1}
                                        max={10}
                                        name=''
                                        />
                                    </div>
                                    <div><AiFillDelete className='text-danger'/></div>
                                </div>
                                <div className='cart-col-4'>
                                <h5 className='price'>₹500</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to='/product' className='button'>Countinue Shopping</Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>SubTotal: ₹500 </h4>
                                <p>Taxes and Shipping calculated at checkout</p>
                                <Link to='/checkout' className='button'>Checkout</Link>
                            </div>
                            </div>
                        </div>
                    </div>

            </Container>
        </>
    )
}

export default Cart