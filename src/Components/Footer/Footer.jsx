import React from 'react'
import style from './Footer.module.css';
import imgFooter from '../../images/imgFooter.png'
export default function Footer() {
    return (
        <>
            <div className={`${style.footer}`}>
                <div className={`${style.footerContainer} container-fluid py-3`}>
                    <div className="row gx-0 gy-4 py-5 my-3 mb-4 border-bottom">
                        <div className="col-lg-4 col-md-8">
                            <div className="content ">
                                <img className='w-75' src={imgFooter} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4  ">
                            <div className="content ">
                                <ul className='px-2'>
                                    <li className='py-3'> <span className={`${style.title} fw-semibold py-5 my-5`}>Navigations</span></li>
                                    <li className='py-1'> <span>Contact us</span></li>
                                    <li className='py-1'> <span>About us</span></li>
                                    <li className='py-1'> <span>Article</span></li>
                                    <li className='py-1'> <span>Shop</span></li>
                                    <li className='py-1'> <span>F&QS</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4   gx-0">
                            <div className="content ">
                                <ul className='px-0'>
                                    <li className='py-3 px-0'> <span className={`${style.title} fw-semibold py-5 my-5`}>Courses</span></li>
                                    <li className='py-1 ms-2'> <span>information technology</span></li>
                                    <li className='py-1 ms-2'> <span>Dolor Quas Ipsa Dol</span></li>
                                    <li className='py-1 ms-2'> <span>Introduction To Sps</span></li>
                                    <li className='py-1 ms-2'> <span>New courses</span></li>
                                    <li className='py-1 ms-2'> <span>Power Bi</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 ">
                            <div className="content">
                                <ul className='px-3'>
                                    <li className='py-3'> <span className={`${style.title} fw-semibold py-5 my-5`}>Shop Categories</span></li>
                                    <li className='py-1'> <span>Books</span></li>
                                    <li className='py-1'> <span>Rulers</span></li>
                                    <li className='py-1'> <span>Bags</span></li>
                                    <li className='py-1'> <span>Pens</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4  ">
                            <div className="content ">
                                <ul className='px-1'>
                                    <li className='py-3'> <span className={`${style.title} fw-semibold  py-5 my-5`}>Contact Us</span></li>
                                    <li className='py-1'> <span>Phone: 96894706981</span></li>
                                    <li className='py-1'> <span>Email: lorm</span></li>
                                    <li className='py-1'> <span>Address: Lorem, ipsum.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mx-5 mt-3 mb-4'>
                        <div className='py-2'>
                            <p>Copyright © 2022 Giga Group Of Bangladesh.</p>
                        </div>
                        <div className=' '>
                        <i className="fa-brands fa-linkedin fs-4 p-2"></i>
                        <i className="fa-brands fa-facebook fs-4 p-2"></i>
                        <i className="fa-brands fa-twitter fs-4 p-2"></i>
                        <i className="fa-brands fa-instagram fs-4 p-2"></i>
                        <i className="fa-brands fa-pinterest fs-4 p-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
