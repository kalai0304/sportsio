import React, { useState } from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
// import ProductCard from '../components/ProductCard';

const Football = () => {
  const [grid, setGrid] = useState(4);
  return (
    <div>
      <Meta title="Football" />
      <BreadCromp title='Football' />

      <div className='cricket-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop by catagories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Bat</li>
                    <li>Ball</li>
                    <li>Nets</li>
                    <li>Pads</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>filter by</h3>
                <div>
                  <h5 className='sub-title'>Avalability</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">In stock (1) </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor=""> Out of stock (0) </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    {/* small form check */}
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">Small </label>
                    </div>
                    {/* Medium form check */}
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">Medium </label>
                    </div>
                    {/* Large form check */}
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">Large </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product brand</h3>
                <div>
                  <div className='product-brand d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>New balance</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>MRF</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Kookaburra</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Elevar</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Spartan Seven</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Adidas</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>SS</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Related products</h3>
                <div className='related-products d-flex'>
                  <div className='w-50'>
                    <img
                      src='images/watch.jpg' className='img-fluid' alt="watch" width={"80%"}
                    />
                  </div>
                  <div className='w-50'>
                    <h5>Title for the prodect</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700" />
                    <b>₹ 199.00</b> only
                    <button type="button" className="btn btn-success mt-2">Buy Now</button>
                  </div>
                </div>
                <hr />
                <div className='related-products d-flex'>
                  <div className='w-50 py-1 px-1'>
                    <img
                      src='images/nets.jpg' className='img-fluid' alt="watch" width={"80%"}
                    />
                  </div>
                  <div className='w-50'>
                    <h5>Title for the product</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700" />
                    <b>₹ 149.00</b> only
                    <button type="button" className="btn btn-success mt-2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-flex' style={{ "width": "50%" }}>Sort by: </p>
                    <select className='form-control form-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, Low to High</option>
                      <option value="price-descending">Price, High to Low</option>
                      <option value="created-ascending">Date, Old to New</option>
                      <option value="created-descending">Date, New to Old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={() => {
                        setGrid(3)
                      }}
                        src='images/gr4.svg'
                        className='d-block img-fluid'
                        alt='grid'
                      />
                      <img onClick={() => {
                        setGrid(4)
                      }}
                        src='images/gr3.svg' className='d-block img-fluid'
                        alt='grid'
                      />
                      <img onClick={() => {
                        setGrid(6)
                      }}
                        src='images/gr2.svg' className='d-block img-fluid'
                        alt='grid'
                      />
                      <img onClick={() => {
                        setGrid(12)
                      }}
                        src='images/gr.svg' className='d-block img-fluid'
                        alt='grid'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex flex-wrap gap-10'>
                  {/* <ProductCard grid={grid} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Football