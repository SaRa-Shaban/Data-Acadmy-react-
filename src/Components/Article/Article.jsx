import React from 'react'
import Slider from "react-slick";
import work from '../../images/work-3.jpg'
import style from './Article.module.css'




export default function Article() {

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


      <div className='frameSlider ms-auto my-5'>

        <div>
          <Slider {...settings}>

            <div className="custom my-2" style={{ width: '100%' }}>
              <div className={` rounded-4 p-4 ${style.boxCard} m-auto`} style={{ width: '100%' }} >
                <div className=''>
                  <img src={work} className='w-100 rounded-3' alt="" />
                </div>
                <div className="card-body">
                  <div className={style.contentCardBody}>
                    <div className='mb-2 mt-4'>
                      <span className={`${style.design} fw-semibold`}>Research</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className='fw-semibold'>Building User Interface..</h3>
                      <i className="fa-solid fa-square-arrow-up-right"></i>
                      {/* <img src={arrow} className='' alt="" /> */}
                    </div>

                    <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                    {/* rate & icons */}
                    <div className='d-flex mb-4 mt-0'>
                      <span className={style.rate}>

                      </span>
                      <div className='d-flex justify-content-between w-100 align-items align-items-center'>
                        <div>
                          <div className={style.calender}>
                          <i className="fa-regular fa-calendar-days pe-2"></i>
                          <span className='text-muted'>20-12-2022</span>
                          </div>
                        </div>
                        <div className={`${style.price}`}>
                          <h6 className='mb-0'>  
                            Read More
                            <i className="fa-solid fa-arrow-right ps-1"></i>
                            </h6>
                        </div>
                      </div>
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
                      <span className={`${style.design} fw-semibold`}>Research</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className='fw-semibold'>Building User Interface..</h3>
                      <i className="fa-solid fa-square-arrow-up-right"></i>
                      {/* <img src={arrow} className='' alt="" /> */}
                    </div>

                    <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                    {/* rate & icons */}
                    <div className='d-flex mb-4 mt-0'>
                      <span className={style.rate}>

                      </span>
                      <div className='d-flex justify-content-between w-100 align-items align-items-center'>
                        <div>
                          <div className={style.calender}>
                          <i className="fa-regular fa-calendar-days pe-2"></i>
                          <span className='text-muted'>20-12-2022</span>
                          </div>
                        </div>
                        <div className={`${style.price}`}>
                          <h6 className='mb-0'>  
                            Read More
                            <i className="fa-solid fa-arrow-right ps-1"></i>
                            </h6>
                        </div>
                      </div>
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
                      <span className={`${style.design} fw-semibold`}>Research</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className='fw-semibold'>Building User Interface..</h3>
                      <i className="fa-solid fa-square-arrow-up-right"></i>
                      {/* <img src={arrow} className='' alt="" /> */}
                    </div>

                    <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                    {/* rate & icons */}
                    <div className='d-flex mb-4 mt-0'>
                      <span className={style.rate}>

                      </span>
                      <div className='d-flex justify-content-between w-100 align-items align-items-center'>
                        <div>
                          <div className={style.calender}>
                          <i className="fa-regular fa-calendar-days pe-2"></i>
                          <span className='text-muted'>20-12-2022</span>
                          </div>
                        </div>
                        <div className={`${style.price}`}>
                          <h6 className='mb-0'>  
                            Read More
                            <i className="fa-solid fa-arrow-right ps-1"></i>
                            </h6>
                        </div>
                      </div>
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
                      <span className={`${style.design} fw-semibold`}>Research</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h3 className='fw-semibold'>Building User Interface..</h3>
                      <i className="fa-solid fa-square-arrow-up-right"></i>
                      {/* <img src={arrow} className='' alt="" /> */}
                    </div>

                    <p className="text-muted">Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                    {/* rate & icons */}
                    <div className='d-flex mb-4 mt-0'>
                      <span className={style.rate}>

                      </span>
                      <div className='d-flex justify-content-between w-100 align-items align-items-center'>
                        <div>
                          <div className={style.calender}>
                          <i className="fa-regular fa-calendar-days pe-2"></i>
                          <span className='text-muted'>20-12-2022</span>
                          </div>
                        </div>
                        <div className={`${style.price}`}>
                          <h6 className='mb-0'>  
                            Read More
                            <i className="fa-solid fa-arrow-right ps-1"></i>
                            </h6>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>


          </Slider>
        </div>
      </div>

    </>
  )
}
