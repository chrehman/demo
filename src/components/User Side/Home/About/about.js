import React from 'react'
import AboutImg1 from './images/about-Img1.png'
import AboutImg2 from './images/about-Img2.png'
import Check from './images/about-check.png'
import logoicon from './images/logo-icon.png'
import './about.scss'

function About(props) {
    return (
        <div ref={props.AboutRef} className='about-outer-div'>
            <div className='row about-inner-div'>
                <div className='col-12 col-xl-6 about-left-div'>
                    <div className='about-left-img-div'>
                        <div className='about-img-line'/>
                        <img className='about-img1' src={AboutImg1} alt='about-img-1'/>
                        <img className='about-img2' src={AboutImg2} alt='about-img-2'/>
                    </div>
                </div>
                <div className='col-12 col-xl-6 about-right-div'>
                    <div className='about-right-inner-div'>
                        <div className='about-right-texts'>
                            <p className='title-text'>
                            <img className='logoicon' src={logoicon} alt='logoicon'/>
                                Fusion-Of-Tech (Think Different) 
                            </p>
                            <p className='about-text'>
                            DeepFusion is a Services Provider Company focused on building products and solutions that are needed for the future. As a global solution provider, using advanced cutting-edge and emerging technology, our aim is to be the best. We used a dynamic workforce to convert the Idea into reality. Accurately providing data-driven solutions in various domains around the globe.
                        </p>
                        </div>
                        <div className='d-flex about-services-div'>
                            <div className='about-services'>
                                <p><img className='service-check-img' src={Check} alt="service-check"/> Research</p>
                                <p><img className='service-check-img' src={Check} alt="service-check"/> Ideation</p>
                                <p><img className='service-check-img' src={Check} alt="service-check"/> Design</p>
                                <p><img className='service-check-img' src={Check} alt="service-check"/> Development</p>
                                <p><img className='service-check-img' src={Check} alt="service-check"/> Iteration</p>
                            </div>
                            <div className='center-line'></div>
                            <div className='since-outer-div'>
                                <div className='since-div'>
                                    <span>Since<br/>2017</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
