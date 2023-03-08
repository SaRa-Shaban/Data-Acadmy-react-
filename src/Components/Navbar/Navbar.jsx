import React from 'react'
import style from "./Navbar.module.css";
import logo from "../../images/logo.jpg";
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-2 bg-body fixed-top w-100">
                <div className={`${style.frameNav} container-fluid`}>
                    <a className= {` navbar-brand ${style.textLogo} me-5 `} href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-center" />
                        Data Academy
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to=''>Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`${style.navLink} nav-link dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`${style.navLink} nav-link dropdown-toggle`} href='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href=''>Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${style.navLink} nav-link`} to='shop'>Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${style.navLink} nav-link`} to='article'>Article</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${style.navLink} nav-link`} to='fqs'>FQS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${style.navLink} nav-link`} to='contact'>Contact us</NavLink>
                            </li>
                        </ul>
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 bg-transparent px-2 d-flex justify-content-center align-items-center`}>
                            <i className={`fa-solid fa-globe ${style.vector} mx-3 py-2`}></i>
                            <i className={`fa-solid fa-cart-shopping ${style.vector}`}></i>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <button className={`btn ${style.btnSignIn} me-2`}>Sign In</button>
                            <button className={`btn btn-info shadow ${style.btnSignUp}`}>Sign Up</button>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
