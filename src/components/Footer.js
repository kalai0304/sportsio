import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import Cricket from '../pages/Cricket'
import newsletter from '../images/newsletter.png';
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt="newsletter" />
                <h3 className='mb-0 text-white'>Sign up for Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your e-mail address... "
                  aria-label="Your e-mail address... "
                  aria-describedby="basic-addon2" />

                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white'>Robert Robertson,<br />Twin Complex,<br /> 9th Street Extn,<br /> Gandhipuram,
                  Coimbatore.</address>
                <a href='tel:+91 1231231230' className='mt-3 d-block mb-1 text-white'>+91 1231231230</a>
                <a href='Email to: 717821p126@kce.ac.in' className='mt-2 d-block mb-0 text-white'>717821p126@kce.ac.in</a>
                <div className='social-icons d-flex align-items-center mt-4 gap-10'>
                  <a className="text-white" href=''>
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href=''>
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href=''>
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href=''>
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>

            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy policy</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund policy</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping policy</Link>
                <Link to='/terms-conditions' className='text-white py-2 mb-1'>Terms & conditions</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact Us</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Cricket</Link>
                <Link className='text-white py-2 mb-1'>Football</Link>
                <Link className='text-white py-2 mb-1'>Hockey</Link>
                <Link className='text-white py-2 mb-1'>Tennis</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} Povered by Developer's corner </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer