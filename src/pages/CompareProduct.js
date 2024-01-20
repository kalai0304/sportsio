import React from 'react'
import Meta from '../components/Meta';
import BreadCromp from '../components/BreadCromp';
const CompareProduct = () => {
  return (
    <>
    <Meta title="Compare Products" />
      <BreadCromp title='Compare Products' />
      <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                      <img 
                      src='images/cross.svg' 
                      alt='cross'
                      className='position-absolute cross img-fluid'
                      />
                      <div className='product-card-image mt-0'>
                        <img src='images/watch.jpg' alt='watch'/>
                        <div className='compare-product-details'>
                          <h5 className='title mt-2'>Title of the product</h5>
                          <h6 className='price mb-3 '>₹400</h6>
                          <div>
                            <div className='product-detail'>
                              <h5>Brand:</h5>
                              <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Type:</h5>
                              <p>type of product</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Availablity:</h5>
                              <p>In stock</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Size:</h5>
                              <div className='d-flex gap-10'>
                              <p>Small</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                      <img 
                      src='images/cross.svg' 
                      alt='cross'
                      className='position-absolute cross img-fluid'
                      />
                      <div className='product-card-image'>
                        <img src='images/watch.jpg' alt='watch'/>
                        <div className='compare-product-details'>
                          <h5 className='title mt-2'>Title of the product</h5>
                          <h6 className='price mb-3 '>₹400</h6>
                          <div>
                            <div className='product-detail'>
                              <h5>Brand:</h5>
                              <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Type:</h5>
                              <p>type of product</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Availablity:</h5>
                              <p>In stock</p>
                            </div>
                            <div className='product-detail'>
                              <h5>Size:</h5>
                              <div className='d-flex gap-10'>
                              <p>Small</p>
                              </div>
                            </div>
                          </div>
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

export default CompareProduct