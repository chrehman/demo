import React from 'react'
import ReactStars from "react-rating-stars-component";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonial.scss'

function Testimonial() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='testimonials-outer-div'>
            <span className='testimonial-title'>Testimonials.<div className='testimonial-title-underline'/></span>
            <div className='testimonial-heading-div'>
                <p>Trusted by Top Companies</p>
                <a href='/home/portfolio'>What Client Say About Us</a>
            </div>
            <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                items={1}
                margin={10}
                center
                nav
            >
                <div className='testimonial-div'>
                    <div className='testimonial-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='testimonial-company-review-div'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            edit={false}
                            value={4}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className='comment'>Loved working with the DeepFusion team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                        <p className='name'>Eddy Broke</p>
                    </div>
                </div>

                <div className='testimonial-div'>
                    <div className='testimonial-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='testimonial-company-review-div'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            edit={false}
                            value={4}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className='comment'>Loved working with the DeepFusion team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                        <p className='name'>Eddy Broke</p>
                    </div>
                </div>

                <div className='testimonial-div'>
                    <div className='testimonial-company-div'>
                        <p>Company</p>
                    </div>
                    <div className='testimonial-company-review-div'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            edit={false}
                            value={4}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className='comment'>Loved working with the DeepFusion team. They provide excellent eCommerce web design and development services. I highly recommend their services.</p>
                        <p className='name'>Eddy Broke</p>
                    </div>
                </div>
            </OwlCarousel>
            
        </div>
    )
}

export default Testimonial
