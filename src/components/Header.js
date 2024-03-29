import React from "react"
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import menu from '../images/menu.svg';
import compare from '../images/compare.svg'
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 px-3">
        <div className="containe-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free delivery , If you buy a product minimum RS.500</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Helpline :
                <a className="text-white" href="tel :+91 1234567890">+91 1234567890</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 px-3">
        <div className="containe-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Sports-io</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search a product ... "
                  aria-label="Search a product ... "
                  aria-describedby="basic-addon2" />

                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between gap-15">
                <div>
                  <Link to='/compare-product' className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Log in <br /> MyAccount
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">1</span>
                      <p className="mb-0">₹500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 fixed-top"> 
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-10 me-5"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src={menu} alt="menu"></img>
                      <span className="d-inline-block">Shop Catogory</span>
                    </button>
                    
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>

                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/cricket">Cricket</NavLink>
                    <NavLink to="/football">FootBall</NavLink>
                    <NavLink to="/">Other</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header