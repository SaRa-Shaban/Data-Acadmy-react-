import React from 'react'
import Slider from "react-slick";
import work from '../../images/work-3.jpg'
import style from './Shop.module.css'




export default function Shop() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    listClass: "slick-list",  // specify your custom class here
    listClass: "slick-slide",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>


      <div className='frameSlider ms-auto my-5 py-2'>
        <ul className="nav nav-pills mb-3 border-bottom border-1" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-allShop-tab" data-bs-toggle="pill" data-bs-target="#pills-allShop" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-book-tab" data-bs-toggle="pill" data-bs-target="#pills-book" type="button" role="tab" aria-controls="pills-book" aria-selected="false">Book</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-tools-tab" data-bs-toggle="pill" data-bs-target="#pills-tools" type="button" role="tab" aria-controls="pills-tools" aria-selected="false">Tools</button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">

          <div className="tab-pane fade show active" id="pills-allShop" role="tabpanel" aria-labelledby="pills-allShop-tab" tabIndex={0}>
            <Slider {...settings}>

              <div className="custom my-2" style={{ width: '100%' }}>
                <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                  <div className=''>
                    <img src={work} className='w-100 rounded-3' alt="" />
                  </div>

                  <div className="card-body">
                    <div className={style.contentCardBody}>
                      <div className='mb-2 mt-4'>
                        <span className={`${style.design1} fw-semibold`}>UI Design</span>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='fw-semibold'>Building User Interface..</h3>
                        <i className="fa-solid fa-square-arrow-up-right"></i>
                        {/* <img src={arrow} className='' alt="" /> */}
                      </div>

                      <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                      {/* rate & icons */}
                      <div className='d-flex mb-4 mt-0'>
                        <div className='d-flex justify-content-between w-100 align-items-center'>
                          <div>

                            <div className={style.stars}>
                              <span className={style.rate}>4.9</span>

                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.light}`}></i>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4 className='mb-0'>$8.99</h4>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                      <div className={`w-100 d-flex ${style.btnCart}`}>
                        <button className='btn btn-outline-danger my-2 w-75 m-auto'>
                          <i className="fa-solid fa-cart-shopping px-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom my-2" style={{ width: '100%' }}>
                <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                  <div className=''>
                    <img src={work} className='w-100 rounded-3' alt="" />
                  </div>

                  <div className="card-body">
                    <div className={style.contentCardBody}>
                      <div className='mb-2 mt-4'>
                        <span className={`${style.design2} fw-semibold`}>UI UX</span>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='fw-semibold'>Building User Interface..</h3>
                        <i className="fa-solid fa-square-arrow-up-right"></i>
                        {/* <img src={arrow} className='' alt="" /> */}
                      </div>

                      <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                      {/* rate & icons */}
                      <div className='d-flex mb-4 mt-0'>
                        <div className='d-flex justify-content-between w-100 align-items-center'>
                          <div>
                            <div className={style.stars}>
                              <span className={style.rate}>4.9</span>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.light}`}></i>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4 className='mb-0'>$8.99</h4>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                      <div className={`w-100 d-flex ${style.btnCart}`}>
                        <button className='btn btn-outline-danger my-2 w-75 m-auto'>
                          <i className="fa-solid fa-cart-shopping px-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="custom my-2" style={{ width: '100%' }}>

                <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                  <div className=''>
                    <img src={work} className='w-100 rounded-3' alt="" />
                  </div>

                  <div className="card-body">
                    <div className={style.contentCardBody}>
                      <div className='mb-2 mt-4'>
                        <span className={`${style.design3} fw-semibold`}>Programing</span>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='fw-semibold'>Building User Interface..</h3>
                        <i className="fa-solid fa-square-arrow-up-right"></i>
                        {/* <img src={arrow} className='' alt="" /> */}
                      </div>

                      <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                      {/* rate & icons */}
                      <div className='d-flex mb-4 mt-0'>
                        <div className='d-flex justify-content-between w-100 align-items-center'>
                          <div>
                            <div className={style.stars}>
                              <span className={style.rate}>4.9</span>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.light}`}></i>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4 className='mb-0'>$8.99</h4>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                      <div className={`w-100 d-flex ${style.btnCart}`}>
                        <button className='btn btn-outline-danger my-2 w-75 m-auto'>
                          <i className="fa-solid fa-cart-shopping px-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="custom my-2" style={{ width: '100%' }}>
                <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                  <div className=''>
                    <img src={work} className='w-100 rounded-3' alt="" />
                  </div>
                  <div className="card-body">
                    <div className={style.contentCardBody}>
                      <div className='mb-2 mt-4'>
                        <span className={`${style.design4} fw-semibold`}>Research</span>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='fw-semibold'>Building User Interface..</h3>
                        <i className="fa-solid fa-square-arrow-up-right"></i>
                        {/* <img src={arrow} className='' alt="" /> */}
                      </div>

                      <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                      {/* rate & icons */}
                      <div className='d-flex mb-4 mt-0'>
                        <div className='d-flex justify-content-between w-100 align-items-center'>
                          <div>
                            <div className={style.stars}>
                              <span className={style.rate}>4.9</span>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.warning}`}></i>
                              <i className={`fa-solid fa-star ${style.light}`}></i>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4 className='mb-0'>$8.99</h4>
                          </div>
                        </div>
                      </div>

                      {/* button */}
                      <div className={`w-100 d-flex ${style.btnCart}`}>
                        <button className='btn btn-outline-danger my-2 w-75 m-auto'>
                          <i className="fa-solid fa-cart-shopping px-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </Slider>
          </div>


          <div className="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab" tabIndex={0}>
            book
          </div>


          <div className="tab-pane fade" id="pills-tools" role="tabpanel" aria-labelledby="pills-tools-tab" tabIndex={0}>
            Tools
          </div>


        </div>
      </div>

    </>
  )
}
