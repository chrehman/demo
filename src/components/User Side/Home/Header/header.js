import React from 'react'
import './header.scss'
import Particles from "react-tsparticles";
import logo from './images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'

function header(props) {

    const AboutScroll = () => window.scrollTo({ behavior: 'smooth', top: props.AboutRef.current.offsetTop })   
    const PortfolioScroll = () => window.scrollTo({ behavior: 'smooth', top: props.PortfolioRef.current.offsetTop })   
    const ServiceScroll = () => window.scrollTo({ behavior: 'smooth', top: props.ServiceRef.current.offsetTop })   
    const CareerScroll = () => window.scrollTo({ behavior: 'smooth', top: props.CareerRef.current.offsetTop }) 

    return (
      <div>
        <div className='header-outer-div'>
          <div className='header-logo-div'>
            <img className='logo' src={logo} alt='logo'/>
          </div>
          <div className='features-btns-div'>
              <div className='header-btns'>
                  <a href='/home' className='header-non-active-feature'>Home</a>
                  <span onClick={AboutScroll} className='header-non-active-feature'>About Us</span>
                  <span onClick={ServiceScroll} className='header-non-active-feature'>Services</span>
                  <span onClick={PortfolioScroll} className='header-non-active-feature'>Portfolio</span>
                  <span onClick={CareerScroll} className='header-non-active-feature'>Careers</span>
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
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">DeepFusion</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className='header-canvas-btns-div'>
              <a href='/home' >Home</a>
              <span onClick={AboutScroll} >About Us</span>
              <span onClick={ServiceScroll} >Services</span>
              <span onClick={PortfolioScroll} >Portfolio</span>
              <span onClick={CareerScroll} >Careers</span>
              <a href='/pricing'>Pricing</a>
              <a href='/contact'>Contact Us</a>
            </div>
          </div>
        </div>
        <div className='header-img-div'>
            <Particles
              id="tsparticles"
              className='custom-particles'

              options={{
                style: {
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: '0'
                },
                background: {
                  color: {
                    value: "#2c2131",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onHover: {
                      enable: false,
                    },
                    resize: true,
                  }
                },
                particles: {
                  color: {
                    value: "#F45B21",
                  },
                  links: {
                    color: "#F45B21",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 50,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
            <div className='header-text-div'>
                <p className='header-text1'>Welcome to new era of Technology Web3.0</p>
                <p className='header-text2'> Turn Your<br/> Idea<br/> Into<br/> Reality.</p>
            </div>
        </div>
      </div>
    )
}

export default header
