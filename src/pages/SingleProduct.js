import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCromp from '../components/BreadCromp';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { GoGitCompare } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import Container from '../components/Container';
// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
// import ImageZoom from 'https://cdn.skypack.dev/react-image-zooom@~1.1.0';
import watch from '../images/watch.jpg'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    // const props = {
    //     width:400,
    //     height:250,
    //     zoomWidth:500,
    //     img:"
    // };

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    const closeModal = ()=>{};

    return (
        <>
            <Meta title="product name" />
            <BreadCromp title='product name' />
            <Container class1='main-product-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div style={{ width: "100%" }}>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'image',
                                            isFluidWidth: true,
                                            src: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
                                            width: 140,
                                            height: 162
                                        },
                                        largeImage: {
                                            src: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
                                            width: 836,
                                            height: 1100
                                        },
                                        // enlargedImagePosition: 'over',
                                        lensStyle: { backgroundColor: 'rgba(0,0,0,0.6)' }
                                    }}
                                    />
                                </div>
                            </div>
                            <div className='other-product-image d-flex flex-wrap gap-12'>
                                <div>
                                    <img src='/images/camera.jpg' alt='camera img' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/camera.jpg' alt='camera img' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/camera.jpg' alt='camera img' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/camera.jpg' alt='camera img' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids headphone bulk 10 pack multi color for students</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>₹ 100</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700" />
                                        <p className='mb-0 reviewclass'>(2 Reviews)</p>
                                    </div>
                                    <a href="#reviewlink">Write a Review</a>
                                </div>
                                <div className='border-bottom'>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Type of the product</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>brand</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Categories :</h3>
                                        <p className='product-data'>category</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>releted tag</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Availablity :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Availablity :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className='d-flex flex-wrap gap-10'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                S
                                            </span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                M
                                            </span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                L
                                            </span>
                                        </div>
                                        <div className='d-flex flex-row align-items-center gap-10 mt-2 mb-3'>
                                            <h3 className='product-heading'>Quantity :</h3>
                                            <div className=''>
                                                <input
                                                    type='number'
                                                    name=''
                                                    min={1}
                                                    max={10}
                                                    className='form-control'
                                                    style={{ "width": "100%" }}
                                                />
                                            </div>
                                            <div className='d-flex align-items-center gap-30 ms-5'>
                                                <button className='button border-0 add-to-cart' type='submit'>
                                                    Add to Cart
                                                </button>
                                                <button className='button signup'>Buy It Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center gap-15 mb-3'>
                                        <div>

                                            <a href='#' className='text-dark fs-6' >
                                                <GoHeart className='fs-5 me-2' /> Add to Wishlist
                                            </a>
                                        </div>
                                        <div>

                                            <a href='#' className='text-dark fs-6' >
                                                <GoGitCompare className='fs-5 me-2' />Add to Compare
                                            </a>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column gap-10 my-3'>
                                        <h3 className='product-heading'>Shipping & Returns :</h3>
                                        <p className='product-data'>
                                            Free shipping and returns available on all orders!
                                            <br /><b>delivery within 2-5 days!</b>
                                        </p>
                                    </div>
                                    <div className='d-flex flex-row gap-10 my-3'>
                                        <h3 className='product-heading'>Product Link :</h3>
                                        <a href="javascript:void(0);"
                                            onClick={() => {
                                                copyToClipboard("https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600");
                                                alert("Link copied");
                                            }

                                            }> Copy Link</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1='description-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>

                                <p>It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                    content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </div>
            </Container>
            <div>
                <Container class1='reviews-wrapper home-wrapper-2' >
                        <div className='row'>
                            <div className='col-12'>
                                <h3 id="reviewlink">Reviews</h3>
                                <div className='review-inner-wrapper'>
                                    <div className='review-head d-flex justify-content-between align-items-center'>
                                        <div>
                                            <h4 className='mb-2'>Customer Reviews</h4>
                                            <div className='d-flex align-items-center gap-10'>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    edit={false}
                                                    activeColor="#ffd700" />
                                                <p className='mb-0'>Based on 2 Customer Reviews</p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <a href='' className='text-dark text-decoration-underline'>Write Review</a>
                                            </div>
                                        )}
                                    </div>
                                    <div className='review-form py-4'>
                                        <h4 className='mt-2'>Write a Review</h4>
                                        <form action='' className='d-flex flex-column gap-10'>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    edit={true}
                                                    activeColor="#ffd700" />
                                            </div>
                                            <div>
                                                <textarea
                                                    className='form-control w-100'
                                                    name=''
                                                    id=''
                                                    cols='30'
                                                    rows='5'
                                                    placeholder='Leave your Comments'></textarea>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='button border-0'>Submit Review</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='reviews'>
                                        <div className='review'>
                                            <div className='d-flex align-items-center gap-10'>
                                                <h6 className='m-0'>Virat</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    edit={true}
                                                    activeColor="#ffd700" />
                                            </div>
                                            <p className='mt-3'>It is a long established fact that a reader will be
                                                distracted by the readable content of a page when
                                                looking at its layout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Container>
            </div>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>
                                Our popular product
                            </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                    </div>
            </Container>

            <div
            className='modal fade'
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keybord="false"
            tabIndex="-1"
            aria-labelledby='staticBackdropLabel'
            aria-hidden="true"
            >
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header py-0 border-0'>
                            <button 
                            type='button'
                            className='btn-close'
                            data-bs-dismiss="modal"
                            aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body py-0'>
                            <div className='d-flex align-items-center'>
                                <div className='flex-grow-1 w-50'>
                                    <img src={watch} alt='watch' className='img-fluid'/> 
                                </div>
                                <div className='d-flex flex-column flex-grow-1 w-50'>
                                    <h6 className='mb-3'>Apple watch</h6>
                                    <p className="mb-1">Quantity: kalai</p>
                                    <p className="mb-1">Size: S</p>    
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer border-0 py-0 justify-content gap-30'>
                            <button 
                            type='button'
                            className='button'
                            data-bs-dismiss="modal"
                            >View My Cart
                            </button>
                            <button type='button' className='button signup'>Checkout</button> 
                        </div>
                        <div className='d-flex justify-content-center py-3'>
                            <Link 
                            className='text-dart'
                            to='/product'
                            onClick={()=>{
                                closeModal();
                            }}
                            >Continue To Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct