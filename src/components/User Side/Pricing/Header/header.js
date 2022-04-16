import React from 'react'
import './header.scss'
import logo from './images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'

function header() {
    return (
        <div>
            <div className='header-outer-div'>
                <div>
                    <img className='logo' src={logo} alt='logo'/>
                </div>
                <div className='features-btns-div'>
                    <div className='header-btns'>
                        <a href='/home' className='header-non-active-feature'>Home</a>
                        <a href='/home/about' className='header-non-active-feature'>About Us</a>
                        <a href='/home/services' className='header-non-active-feature'>Services</a>
                        <a href='/home/portfolio' className='header-non-active-feature'>Portfolio</a>
                        <a href='/careers' className='header-non-active-feature'>Careers</a>
                        <a href='/pricing' className='header-non-active-feature'>Pricing</a>
                    </div>
                    <div>
                        <a href='/contact' className='contact-us-btn'>Contact Us</a>
                    </div>
                </div>
            </div>
            <div className='mobile-view-header'>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><AiOutlineMenu/></button>
                <div className='d-flex justify-content-center'>
                    <img className='logo' src={logo} alt='logo'/>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">DeepFusion</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='header-canvas-btns-div'>
                        <a href='/home'>Home</a>
                        <a href='/home/about'>About Us</a>
                        <a href='/home/services'>Services</a>
                        <a href='/home/portfolio'>Portfolio</a>
                        <a href='/careers'>Careers</a>
                        <a href='/pricing'>Pricing</a>
                        <a href='/contact'>Contact Us</a>
                    </div>
                </div>
            </div>
            <div className='header2-img-div'>
                <div className='header2-text-div'>
                    <p className='header2-text1'>Pricing.</p>
                    <p className='header2-text2'>Best Packages for you.</p>
                </div>
            </div>
        </div>
    )
}

export default header
