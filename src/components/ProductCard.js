import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
// import watch2 from "../images/watch1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    ;

    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/cricket" ? `gr-${grid}` : "col-3"} `}>
                <Link
                    to=
                    {`${location.pathname === "/" ? '/cricket/product/:id'
                        : location.pathname === "/cricket/product/:id"
                            ? "/cricket/product/:id"
                            : "/cricket/product/:id"
                        }`}
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="whislist" />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={watch} alt='watch' width={"100%"}></img>
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>YONEX</h6>
                        <h5 className='product-title'>
                            kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                            document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final
                            copy is available.
                        </p>
                        <p className='price'>₹100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='addcart' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='addcart' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname === "/cricket" ? `gr-${grid}` : "col-3"} `}>
                <Link to=
                    {`${location.pathname === "/" ? '/cricket/product/:id'
                        : location.pathname === "/cricket/product/:id"
                            ? "/cricket/product/:id"
                            : "/cricket/product/:id"
                        }`}
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src={wish} alt="whislist" />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src={watch} alt='watch' width={"100%"}></img>
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>YONEX</h6>
                        <h5 className='product-title'>
                            kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                            document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final
                            copy is available.
                        </p>
                        <p className='price'>₹100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='addcart' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='addcart' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <div className={` ${location.pathname === "/football" ? `gr-${grid}` : "col-3"} `}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src="images/wish.svg" alt="whislist" />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/watch.jpg' alt='watch'  width={"100%"}></img>
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>YONEX</h6>
                        <h5 className='product-title'>
                            kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700" />
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                            document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final
                            copy is available.
                        </p>
                        <p className='price'>₹100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='addcart' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='addcart' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div> */}

        </>
    )
}

export default ProductCard