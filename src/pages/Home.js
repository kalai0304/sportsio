import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import Meta from '../components/Meta';
const Home = () => {
  return (
    <>
    <Meta title="Sporst-io" />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className='d-flex gap-40'>
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4><b style={{ color: "white" }}>All sports products</b></h4>
                  <h5 style={{ color: "#D7CF07" }}>Available here...</h5>
                  <p style={{ color: "#EFFFFA" }}>Starting from ₹199</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap align-items-center gap-10'>
                <div className="small-banner position-relative ">
                  <img
                    src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='small banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>--</h4>
                    <h5>--</h5>
                    <p>--</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='small banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>--</h4>
                    <h5>--</h5>
                    <p>--</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='small banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>--</h4>
                    <h5>--</h5>
                    <p>--</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='small banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>--</h4>
                    <h5>--</h5>
                    <p>--</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-itmes-center justify-content-between'>
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-10' key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
      <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex align-itmes-center flex-wrap justify-content-between'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Soccer</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Basketball</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Tennis</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/watch.jpg' alt='camera' width='170px' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Softball</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Soccer</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Basketball</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Tennis</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/watch.jpg' alt='camera' width='170px' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Softball</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
      </Container> 
      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Special product
              </h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
        </div>
      </Container>
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
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='marquee-wrapper py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='top-brands text-center'><b>Top Brands</b></div>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='product-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='shopping-wrapper text-center p-5'>
        <div>
          <button type="button" className="btn btn-warning">SHOP NOW

            <div className='position-absolute bicurser'>

            </div>
          </button>
        </div>
      </Container>
    </>
  )
}

export default Home;