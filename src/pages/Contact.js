import React from 'react'
import Meta from '../components/Meta';
import BreadCromp from '../components/BreadCromp';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCromp title='Contact Us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.105900669534!2d77.01956713102358!3d10.879549390221536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1703237255488!5m2!1sen!2sin"
                title='Location'
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-10'>
                  <div>
                    <input type="text" className='form-control' placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className='form-control' placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className='form-control' placeholder='PhoneNumber' />
                  </div>
                  <div>
                    <textarea
                      className='form-control w-100'
                      name=''
                      id=''
                      cols='30'
                      rows='5'
                      placeholder='Comments'></textarea>
                  </div>
                  <div >
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div >
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex align-items-center gap-10'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>Robert Robertson,Twin Complex,9th Street Extn,Gandhipuram,Coimbatore.</address>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-10'>
                      <BiPhoneCall className='fs-5' />
                      <a href='tel:+91 1231231230'>+91 1231231230</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-10'>
                      <AiOutlineMail className='fs-5' />
                      <a href='Email to: 717821p126@kce.ac.in'>717821p126@kce.ac.in</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-10'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Information about us</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact