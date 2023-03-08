import React, { useState } from 'react';
import style from "./Home.module.css";
import logo from "../../images/logo.jpg";
import advance from '../../images/advanc.png'
import videoImg from '../../images/videoImg.png'
import Shop from '../../Components/Shop/Shop'
import Article from '../../Components/Article/Article'
import Courses from './../Courses/Courses';
import circle from '../../images/circleIntro.png'
import rectangle from '../../images/Rectangle 1448.png'
import girl from '../../images/custom.jpg'


export default function Home() {


  return (
    <>

      {/* 
          <i className="fa-solid fa-graduation-cap"></i>
          <i className="fa-brands fa-telegram"></i>
    */}

      {/* intro */}
      <div className="position-relative">
        <div className="frameMaster my-5 py-5 ">
          <div className="container-fluid">
            <div className="row gx-2 gy-5 align-items-center ">

              <div className="col-md-5 py-2">
                <div className={style.intro}>

                  <h1 className='fw-bold'>Up your <span>Skills</span> <br /> To <span>Advance</span> your <span>Career</span> path</h1>

                  <p className='text-muted py-4 '>Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley</p>

                  <div className='d-flex   justify-content-center align-items-center '>

                    <div className={`w-100 me-auto position-relative ${style.holder}`}>
                      <input type="text" className={`form-control ${style.formControlCustom}`} placeholder='What do you want to learn?' />
                      <i className={`fa-solid fa-magnifying-glass position-absolute text-muted ${style.iconSearch}`}></i>
                    </div>

                    <div className='w-25 '>
                      <button className={`btn btn-primary ${style.startBtn}`}>GetStart</button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-md-7 d-flex justify-content-center position-relative">

                {/* img girl */}
                <div className="content">
                  <img src={girl} className='w-100' alt="" />
                </div>

                {/* rectangle img */}
                <div className={`position-absolute bg-light ${style.rectangle}`}>
                  <img src={rectangle} className='w-100 ' alt="" />
                </div>


                {/* followers */}
                <div className={`d-flex position-absolute ${style.followersPosition}`}>

                  <div className='bg-body rounded-3 shadow'>

                    <div className='text-end'>
                      <i className="fa-solid fa-circle-check text-success fa-xl"></i>
                    </div>

                    <h6 className='mx-3'>Online Courses</h6>

                    <div className="position-relative mx-3">
                      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar" style={{ width: '70%' }} />
                      </div>


                      <div className={`${style.numFollowers} text-center position-absolute bg-body py-2 `}>
                        <i className="fa-solid fa-circle"></i>
                        <h4>125k</h4>
                      </div>

                    </div>

                    <div className='text-center py-2 pb-3'>
                      <span>Followers</span>
                    </div>

                  </div>

                </div>

                {/* counting */}
                <div className={`d-flex position-absolute position-relative  p-3  ${style.countingPosition}`}>
                  <div className='bg-body rounded-3 d-flex flex-column p-1'>
                    <div className='d-flex  align-items-center '>

                      <div className={`${style.medalIntro} d-flex justify-content-center align-items-center`}>
                        <i className="fa-solid fa-medal"></i>
                      </div>

                      <div className='d-flex flex-column justify-content-center px-2'>
                        <h6 className={`fw-semibold ${style.countIntro}`}>Counting</h6>
                        <h5 className={`fw-bold ${style.numCountIntro}`}>100,000+</h5>
                      </div>


                    </div>

                    <div className={`d-flex justify-content-evenly `}>
                      <div className={style.graduations}>Besnik graduations</div>
                      <div className={style.graduations}>15.35%/yr</div>
                    </div>

                  </div>
                  {/* circle div */}
                  <div className={`${style.circleDiv} position-absolute `}></div>
                </div>

                {/* tutors */}
                <div className={`d-flex position-absolute ${style.tutorsPosition}`}>

                  <div className='bg-body shadow rounded-3 d-flex flex-column p-2'>

                    <div className='d-flex  align-items-center '>

                      <div className={`${style.chalkboardIntro} d-flex justify-content-center align-items-center`}>
                        <i className="fa-solid fa-person-chalkboard"></i>
                      </div>

                      <div className='d-flex flex-column justify-content-center align-items-srart px-2'>
                        <h6 className={`fw-semibold text-muted mb-0 ${style.tutorsIntro}`}>Tutors</h6>
                        <h5 className={`fw-bold mb-0 ${style.numTutorsIntro}`}>250+</h5>
                      </div>


                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* circle img*/}
        <div className={`position-absolute end-0 ${style.circle}`}>
          <img src={circle} className='w-100' alt="" />
        </div>
      </div>

      {/* our services */}
      <div className='frameMaster mb-5 mt-4'>
        <div className={`text-center ${style.title}`}>
          <span className='fw-semibold py-2'>Our Services</span>
          <h1 className='py-2 mb-3'>Here begins your journey from science to work</h1>
        </div>
        <div className={`${style.services}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="content">
                  <div className={`${style.serchIcon} my-3 d-flex align-items-center justify-content-center `}>
                    <i className=" fa-2xl  my-3 fa-solid fa-magnifying-glass"></i>
                  </div>
                  <h3 className='py-2'>Discover</h3>
                  <p className='text-muted'>A large variety of the most efficient and quality courses and specializations.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <div className={`${style.capIcon} my-3 d-flex align-items-center justify-content-center `}>
                    <i className=" fa-2xl  my-3 fa-solid fa-graduation-cap"></i>
                  </div>
                  <h3 className='py-2'>Learn</h3>
                  <p className='text-muted'>With the most qualified trainers to hone your professional and practical skills.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <div className={`${style.medalIcon} my-3 d-flex align-items-center justify-content-center `}>
                    <i className=" fa-2xl  my-3 fa-solid fa-medal"></i>
                  </div>
                  <h3 className='py-2'>Get Certified</h3>
                  <p className='text-muted'>To enhance your chances of launching or developing your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Courses */}
      <div className="frameMaster">
        <div className={`text-center ${style.title} py-4`}>
          <span className='fw-semibold py-2'>Explore Courses</span>
          <h1 className='py-2 mb-3'>Our Most Popular Courses</h1>
        </div>

        <div className={`d-flex justify-content-between align-items-center mt-3 mb-2 ${style.titleBtn}`}>
          <h1>Courses</h1>
          <button className='btn btn-outline-danger p-2 fs-4'>View all Courses</button>
        </div>

      </div>
      <Courses />

      {/* Advance with lorem */}
      <div className='frameMaster my-5 pt-4'>
        <div className="container-fluid">
          <div className="row gy-2 gx-5 align-items-center">
            <div className="col-md-5">
              <div className="content">
                <img src={advance} className='w-100' alt="" />
              </div>
            </div>

            <div className="col-md-7">
              <div className="row gy-2  h-100 py-5 px-3">
                <div className="col-md-12">
                  <div className={style.advanceContent}>
                    <h2>Advance with lorem</h2>
                    <p className='text-muted'>Join the community of lorem lorm ers to make a quantum leap in your career
                      through programs designed to provide you with the skills you need to explore
                      your own potential and potential.</p>
                  </div>

                  <div className="row py-3">
                    <div className="col-md-6">
                      <div className={style.qualityContent}>
                        <div className={style.videoIcon}>
                          {/* <i className="fa-regular fa-circle-play fa-2xl"></i> */}
                          <img src={videoImg} className='w-50' alt="" />
                        </div>
                        <h4 className='fw-bold'>High quality content</h4>
                        <p className='text-muted'>Acquire the skills required in the labor market with a selection of the best
                          experts and trainers.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={style.qualityContent}>
                        <div className={style.videoIcon}>
                          {/* <i className="fa-regular fa-circle-play fa-2xl"></i> */}
                          <img src={videoImg} className='w-50' alt="" />
                        </div>
                        <h4 className='fw-bold'>Professional readiness</h4>
                        <p className='text-muted'>Stand out in the job market with your skills and passion <br /> for learning and <br /> development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Explore Shop */}
      <div className="frameMaster my-5">
        <div className={`text-center ${style.title} py-4`}>
          <span className='fw-semibold py-2'>Explore Shop</span>
          <h1 className='py-2 mb-3'>Our Most Popular Shop</h1>
        </div>
        <div className={`d-flex justify-content-between align-items-center mt-3 mb-2 ${style.titleBtn}`}>
          <h1>Our Shop</h1>
          <button className='btn btn-outline-danger p-2 fs-4'>View all Shop</button>
        </div>
      </div>
      <Shop />

      {/* explore services */}
      <div className={style.exploreServices}>
        <div className={`text-center ${style.title} pt-5 pb-3`}>
          <span className='fw-semibold py-2'>Explore Services</span>
          <h1 className='py-2 mb-3'>Our Most Popular Service</h1>
        </div>
        <div className='bg-light'>
          <div className='text-center w-100 py-5 '>
            <a className={` navbar-brand ${style.textLogo} me-5 `} href="#">
              <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-center" />
              <span className='px-2'>Data Academy</span>
            </a>
          </div>

          <div className='frameMaster pb-5'>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className={`${style.content} p-3 mb-5`}>
                    <h3>Tracks</h3>
                    <p>It shows you the milestones you need to reach a specific goal through a set of proposed applied courses and projects that form an integrated educational package.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${style.content} p-3 mb-5`}>
                    <h3>Courses</h3>
                    <p>A collection of educational lessons and applied projects with the aim of mastering modern skills and technologies.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${style.content} p-3 mb-5`}>
                    <h3>Workshop <span>(soon)</span></h3>
                    <p>Mini-lessons that show you how to master a specific coding skill you need to build your project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* explore Article */}
      <div className="frameMaster my-5">
        <div className={`text-center ${style.title} py-4`}>
          <span className='fw-semibold py-2'>Explore Article</span>
          <h1 className='py-2 mb-3'>Our Most Popular Article</h1>
        </div>
        <div className={`mt-3 mb-2 ${style.titleBtn}`}>
          <h1 className='px-2 fw-semibold'>Article</h1>
        </div>
      </div>
      <Article />

      {/* Subscribe */}
      <div className={`${style.subscribe} pt-5 `}>
        <div className={`bg-light rounded-4 mt-5 py-5 ${style.content}`}>
          <h2 className='text-center mt-2 pt-2'>Subscribe To Our Newsletter</h2>
          <div className='d-flex justify-content-center pb-2 w-100'>
            <input type="text" className='form-control mx-3 mt-4 py-2' />
            <button className='btn btn-info  mx-3 mt-4 text-white'>Subscribe</button>
          </div>
        </div>

      </div>
    </>
  )
}
