import React from 'react'
import Slider from "react-slick";
import work from '../../images/work-3.jpg'
import style from './Courses.module.css'
import client from '../../images/client.png'



export default function Courses() {

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


      <div className='frameSlider ms-auto my-5 '>
        <ul className="nav nav-pills mb-3 border-bottom border-1" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-acceptsMarketing-tab" data-bs-toggle="pill" data-bs-target="#pills-acceptsMarketing" type="button" role="tab" aria-controls="pills-acceptsMarketing" aria-selected="false">Accepts marketing</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-repeatCustomers-tab" data-bs-toggle="pill" data-bs-target="#pills-repeatCustomers" type="button" role="tab" aria-controls="pills-repeatCustomers" aria-selected="false">Repeat customers</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-tap4-tab" data-bs-toggle="pill" data-bs-target="#pills-tap4" type="button" role="tab" aria-controls="pills-tap4" aria-selected="false">Tap 4</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-tap5-tab" data-bs-toggle="pill" data-bs-target="#pills-tap5" type="button" role="tab" aria-controls="pills-tap5" aria-selected="false">Tap 5</button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">

          <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
            <div>
              <Slider {...settings}>

                <div className="custom my-2" style={{ width: '100%' }}>

                  <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                    <div className='position-relative'>
                      <img src={work} className='w-100 rounded-3' alt="" />

                      <div className='d-flex justify-content-between position-absolute top-0 w-100 p-3'>
                        <div className={`bg-light ${style.camera}`}>
                          <i className={`fa-solid fa-video`}></i>
                        </div>

                        <div className='bg-light rounded-1 px-2 pt-1 '>
                          <i className="fa-regular fa-clock px-1"></i>
                          <span className='text-muted'> 12 hr 50/ mins</span>
                        </div>
                      </div>

                    </div>

                    <div className="card-body">
                      <div className={style.contentCardBody}>
                        <div className='mb-2 mt-4'>
                          <span className={`${style.design} fw-semibold`}>Design</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h3 className='fw-semibold'>Building User Interface..</h3>
                          <i className="fa-solid fa-square-arrow-up-right"></i>
                          {/* <img src={arrow} className='' alt="" /> */}
                        </div>

                        <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                        {/* rate & icons */}
                        <div className='d-flex mb-4 mt-0'>
                          <span className={style.rate}>4.9</span>
                          <div className={style.stars}>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.light}`}></i>
                          </div>
                          <span className='text-muted px-2'>(123)</span>
                        </div>

                        {/* client */}
                        <div className='d-flex justify-content-between align-items-center my-3'>
                          <div className='d-flex w-100 align-items-center'>
                            <img src={client} className={style.clientImg} alt="" />
                            <div className='d-flex flex-column justify-content-center px-2'>
                              <span className={`fw-semibold ${style.nameClient}`}>Mahmoud Mahamed</span>
                              <span className={`text-muted ${style.enrolled}`}>2019 Enrolled</span>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4>$8.99</h4>
                          </div>

                        </div>
                        {/* button */}
                        <div className={`w-100 d-flex ${style.btnCart1}`}>
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
                    <div className='position-relative'>
                      <img src={work} className='w-100 rounded-3' alt="" />

                      <div className='d-flex justify-content-between position-absolute top-0 w-100 p-3'>
                        <div className={`bg-light ${style.camera}`}>
                          <i className={`fa-solid fa-video`}></i>
                        </div>

                        <div className='bg-light rounded-1 px-2 pt-1 '>
                          <i className="fa-regular fa-clock px-1"></i>
                          <span className='text-muted'> 12 hr 50/ mins</span>
                        </div>
                      </div>

                    </div>

                    <div className="card-body">
                      <div className={style.contentCardBody}>
                        <div className='mb-2 mt-4'>
                          <span className={`${style.design} fw-semibold`}>Design</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h3 className='fw-semibold'>Building User Interface..</h3>
                          <i className="fa-solid fa-square-arrow-up-right"></i>
                          {/* <img src={arrow} className='' alt="" /> */}
                        </div>

                        <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                        {/* rate & icons */}
                        <div className='d-flex mb-4 mt-0'>
                          <span className={style.rate}>4.9</span>
                          <div className={style.stars}>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.light}`}></i>
                          </div>
                          <span className='text-muted px-2'>(123)</span>
                        </div>

                        {/* client */}
                        <div className='d-flex justify-content-between align-items-center my-3'>
                          <div className='d-flex w-100 align-items-center'>
                            <img src={client} className={style.clientImg} alt="" />
                            <div className='d-flex flex-column justify-content-center px-2'>
                              <span className={`fw-semibold ${style.nameClient}`}>Mahmoud Mahamed</span>
                              <span className={`text-muted ${style.enrolled}`}>2019 Enrolled</span>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4>$8.99</h4>
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
                    <div className='position-relative'>
                      <img src={work} className='w-100 rounded-3' alt="" />

                      <div className='d-flex justify-content-between position-absolute top-0 w-100 p-3'>
                        <div className={`bg-light ${style.camera}`}>
                          <i className={`fa-solid fa-video`}></i>
                        </div>

                        <div className='bg-light rounded-1 px-2 pt-1 '>
                          <i className="fa-regular fa-clock px-1"></i>
                          <span className='text-muted'> 12 hr 50/ mins</span>
                        </div>
                      </div>

                    </div>

                    <div className="card-body">
                      <div className={style.contentCardBody}>
                        <div className='mb-2 mt-4'>
                          <span className={`${style.design} fw-semibold`}>Design</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h3 className='fw-semibold'>Building User Interface..</h3>
                          <i className="fa-solid fa-square-arrow-up-right"></i>
                          {/* <img src={arrow} className='' alt="" /> */}
                        </div>

                        <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                        {/* rate & icons */}
                        <div className='d-flex mb-4 mt-0'>
                          <span className={style.rate}>4.9</span>
                          <div className={style.stars}>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.light}`}></i>
                          </div>
                          <span className='text-muted px-2'>(123)</span>
                        </div>

                        {/* client */}
                        <div className='d-flex justify-content-between align-items-center my-3'>
                          <div className='d-flex w-100 align-items-center'>
                            <img src={client} className={style.clientImg} alt="" />
                            <div className='d-flex flex-column justify-content-center px-2'>
                              <span className={`fw-semibold ${style.nameClient}`}>Mahmoud Mahamed</span>
                              <span className={`text-muted ${style.enrolled}`}>2019 Enrolled</span>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4>$8.99</h4>
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
                    <div className='position-relative'>
                      <img src={work} className='w-100 rounded-3' alt="" />

                      <div className='d-flex justify-content-between position-absolute top-0 w-100 p-3'>
                        <div className={`bg-light ${style.camera}`}>
                          <i className={`fa-solid fa-video`}></i>
                        </div>

                        <div className='bg-light rounded-1 px-2 pt-1 '>
                          <i className="fa-regular fa-clock px-1"></i>
                          <span className='text-muted'> 12 hr 50/ mins</span>
                        </div>
                      </div>

                    </div>

                    <div className="card-body">
                      <div className={style.contentCardBody}>
                        <div className='mb-2 mt-4'>
                          <span className={`${style.design} fw-semibold`}>Design</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h3 className='fw-semibold'>Building User Interface..</h3>
                          <i className="fa-solid fa-square-arrow-up-right"></i>
                          {/* <img src={arrow} className='' alt="" /> */}
                        </div>

                        <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                        {/* rate & icons */}
                        <div className='d-flex mb-4 mt-0'>
                          <span className={style.rate}>4.9</span>
                          <div className={style.stars}>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.warning}`}></i>
                            <i className={`fa-solid fa-star ${style.light}`}></i>
                          </div>
                          <span className='text-muted px-2'>(123)</span>
                        </div>

                        {/* client */}
                        <div className='d-flex justify-content-between align-items-center my-3'>
                          <div className='d-flex w-100 align-items-center'>
                            <img src={client} className={style.clientImg} alt="" />
                            <div className='d-flex flex-column justify-content-center px-2'>
                              <span className={`fw-semibold ${style.nameClient}`}>Mahmoud Mahamed</span>
                              <span className={`text-muted ${style.enrolled}`}>2019 Enrolled</span>
                            </div>
                          </div>
                          <div className={style.price}>
                            <h4>$8.99</h4>
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
          </div>


          <div className="tab-pane fade" id="pills-acceptsMarketing" role="tabpanel" aria-labelledby="pills-acceptsMarketing-tab" tabIndex={0}>
          acceptsMarketing
          </div>


          <div className="tab-pane fade" id="pills-repeatCustomers" role="tabpanel" aria-labelledby="pills-repeatCustomers-tab" tabIndex={0}>
          repeatCustomers
          </div>

          <div className="tab-pane fade" id="pills-tap4" role="tabpanel" aria-labelledby="pills-tap4-tab" tabIndex={0}>
          tap4
          </div>

          <div className="tab-pane fade" id="pills-tap5" role="tabpanel" aria-labelledby="pills-tap5-tab" tabIndex={0}>
          tap5
          </div>
        </div>
      </div>

    </>
  )
}
