import React from 'react'
import './portfolio.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from './Images/Finance.png'
import Img2 from './Images/Haptic.png'
import Img3 from './Images/Ooder.png'
import logo from './Images/grise_token_logo.png'
import logo2 from './Images/logo_ooder.png'
import logo3 from './Images/haptic_logo.png'

function Portfolio(props) {

    return (
        <div ref={props.PortfolioRef} className='portfolio-outer-div'>
            <span className='portfolio-title'>PORTFOLIO.<div className='portfolio-title-underline'/></span>
            <div className='portfolio-div'>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    autoplay
                    items={1}
                    autoplayHoverPause={true}
                    dots={false}
                    nav
                >
                    <div className='item'>
                        <div className='row'>
                            <div className='col-12 col-md-5 portfolio-images-outer-div'>
                                <div className='portfolio-images-div'>
                                    <img className='portfolio-img1' src={Img1} alt='calender'/>
                                    {/* <img className='portfolio-img2' src={Img1} alt='map'/> */}
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='portfolio-discription-div'>
                                    <div className='portfolio-logo-div'><img className='portfolio-logo-img' src={logo} alt='logo'/><div className='portfolio-logo-img-underline'/></div>
                                    <p className='portfolio-heading'>
                                        Grise - Metamoonverse,<br/>NFTs & Moonland
                                    </p>
                                    <p className='portfolio-discription'>
                                    IN 1969 the first ever landing of moon was confirmed. In 2022 the first metaverse on moon is being bulit. It seems fit to name the work grisemetamoonverse where trippy beings and machines reside.<br/>
                                    <h5>The Grise moon metaverse</h5>
                                    It is of utmost importance that we specify that our metaverse is in its infancy these are very early stages of development. We will have 10,000 pieces of land parcels in our first land release. And we plan on working hard to provide our ingame moonverse experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='row'>
                            <div className='col-12 col-md-5 portfolio-images-outer-div'>
                                <div className='portfolio-images-div'>
                                    <img className='portfolio-img1' src={Img2} alt='calender'/>
                                    {/* <img className='portfolio-img2' src={Img1} alt='map'/> */}
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='portfolio-discription-div'>
                                    <div className='portfolio-logo-div'><img className='portfolio-logo-img' src={logo3} alt='logo'/><div className='portfolio-logo-img-underline'/></div>
                                    <p className='portfolio-heading'>
                                        Haptic Zones - Smart AI Camera,<br/>Gesture & AI
                                    </p>
                                    <p className='portfolio-discription'>
                                    Haptic Zones are specified areas located on the touch screen camera interface programmed to respond to specific preset actions. Multiple-Haptic Zones Technology allows preset actions that can change from one haptic zone to another in real-time during the recording process of a photo or video recording or post-recording during the video or image preview. These actions are video, photo, sounds, holograms, augmented reality filters, lenses, objects, sounds, and images, etc. Your finger placement on the mobile device touch screen triggers an action located within a specific haptic zone.
                                                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='row'>
                            <div className='col-12 col-md-5 portfolio-images-outer-div'>
                                <div className='portfolio-images-div'>
                                    <img className='portfolio-img1' src={Img3} alt='calender'/>
                                    {/* <img className='portfolio-img2' src={Img1} alt='map'/> */}
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='portfolio-discription-div'>
                                    <div className='portfolio-logo-div'><img className='portfolio-logo-img' src={logo2} alt='logo'/><div className='portfolio-logo-img-underline'/></div>
                                    <p className='portfolio-heading'>
                                        Ooder - Personalized Ecommerce,<br/>Big Data & AI
                                    </p>
                                    <p className='portfolio-discription'>
                                    Ooder is an e-commerce marketplace where we can purchase the product at the best minimum price from top product providers in the UK. This helps users to find the price using AI and see similar product ingredients. Furthermore, this platform is designed in a way so every user can have their own personalized screens behind the scene I have built multiple recommendation techniques(collaborative and content filtering) on the based of profiles and products to suggest something relevant and to get the most out of it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Portfolio


