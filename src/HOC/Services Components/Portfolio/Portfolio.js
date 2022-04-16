import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './portfolio.scss'

function Testimonial() {
    
    return (
        <div className='work-portfolio-outer-div'>
            <span className='work-portfolio-title'>Work Portfolio.<div className='work-portfolio-title-underline'/></span>
            <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                items={1}
                nav
            >
                <div className='work-portfolio-div'>
                    <div className='work-portfolio-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='work-portfolio-company-review-div'>
                        <p className='name'>Company Name</p>
                        <p className='comment'>Loved working with the InvoZone team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                    </div>
                </div>

                <div className='work-portfolio-div'>
                    <div className='work-portfolio-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='work-portfolio-company-review-div'>
                        <p className='name'>Company Name</p>
                        <p className='comment'>Loved working with the InvoZone team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                    </div>
                </div>

                <div className='work-portfolio-div'>
                    <div className='work-portfolio-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='work-portfolio-company-review-div'>
                        <p className='name'>Company Name</p>
                        <p className='comment'>Loved working with the InvoZone team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                    </div>
                </div>

            </OwlCarousel>
            
        </div>
    )
}

export default Testimonial
