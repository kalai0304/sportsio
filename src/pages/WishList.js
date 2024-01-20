import React from 'react'
import Meta from '../components/Meta'
import BreadCromp from '../components/BreadCromp'
const WishList = () => {

    return (
        <>
            <Meta title="WishList" />
            <BreadCromp title='WishList' />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='wishlist-card-image p-5'>
                                    <img src='images/watch.jpg'
                                        alt='watch'
                                        className='img-fluid w-100 '
                                    />

                                    <div className='py-3 px-3'>
                                        <h5 className='title mt-2'>Title of the product</h5>
                                        <h6 className='price mb-3 '>₹400</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='wishlist-card-image p-5'>
                                    <img src='images/watch.jpg'
                                        alt='watch'
                                        className='img-fluid w-100'
                                    />

                                    <div className='py-3 px-3'>
                                        <h5 className='title mt-2'>Title of the product</h5>
                                        <h6 className='price mb-3 '>₹400</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='wishlist-card-image p-5'>
                                    <img src='images/watch.jpg'
                                        alt='watch'
                                        className='img-fluid w-100'
                                    />

                                    <div className='py-3 px-3'>
                                        <h5 className='title mt-2'>Title of the product</h5>
                                        <h6 className='price mb-3 '>₹400</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default WishList