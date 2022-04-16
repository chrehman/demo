import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Team.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Team() {

    const options = {
        autoplay: true,
        autoplayHoverPause:true,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        responsiveClass:true,
        responsive: {
            2560:{
                items:3,
                center: true
            },
            1680:{
                items:3,
                center: true
            },
            1440:{
                items:3,
                center: true
            },
            1024:{
                items:3,
                center: true
            },
            912:{
                items:3,
                center: true
            },
            820:{
                items:3,
                center: true
            },
            768:{
                items:3,
                center: true
            },
            540:{
                items:1,
                center: true
            },
            414:{
                items:1,
                center: true
            },
            390:{
                items:1,
                center: true
            },
            375:{
                items:1,
                center: true
            },
            360:{
                items:1,
                center: true
            },
            280:{
                items:1,
                center: true
            }
        }
    }
    return (
        <div className='team-outer-div'>
            <span className='team-title'>MEET OUR EXPERT TEAM.<div className='team-title-underline'/></span>
            <div className=''>
                <OwlCarousel
                    className="owl-theme"
                    {...options}
                >

                    <div className='item'>
                        <div className='team-card'>
                            <div className='team-img'>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHOUqLGJiB2uQ/profile-displayphoto-shrink_400_400/0/1582449435963?e=1652918400&v=beta&t=-9a_xRQgqZ4KnbKHLKwrWsZOUxjWTSf_087styN4P-g"></img>
                                <div className='social-media-icons'>
                                    <div className='icons-div'>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.facebook.com/Shahzaib42O/" target="_blank"><FaFacebookF /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://twitter.com/Test_drive_mars" target="_blank"><FaTwitter /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.linkedin.com/in/shahzaib-ali-899846a6/" target="_blank"><FaLinkedinIn /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.instagram.com/shahzaib81399/" target="_blank"><FaInstagram /></a></span>
                                    </div>
                                </div>
                            </div>
                            <div className='team-details-div'>
                                <p className='team-name'>Shahzaib Ali</p>
                                <p className='team-position'>Chief Executive Officer (CEO)</p>
                            </div>
                        </div>
                    </div>

                    <div className='item'>
                        <div className='team-card'>
                            <div className='team-img'>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGkFBqll8WZ-g/profile-displayphoto-shrink_400_400/0/1610437281080?e=1652918400&v=beta&t=ZWWWSerpwIugQetOgxwqQOcEocdTXorrwbdUW41e0bw"></img>
                                <div className='social-media-icons'>
                                    <div className='icons-div'>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.facebook.com/itsnabeelashfaq" target="_blank"><FaFacebookF /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://twitter.com/inabeelashfaq" target="_blank"><FaTwitter /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.linkedin.com/in/muhammadnabeelashfaq/" target="_blank"><FaLinkedinIn /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.instagram.com/muhammadnabeelashfaq/" target="_blank"><FaInstagram /></a></span>
                                    </div>
                                </div>
                            </div>
                            <div className='team-details-div'>
                                <p className='team-name'>Nabeel Ashfaq</p>
                                <p className='team-position'>Chief Technology Officer (CTO)</p>
                            </div>
                        </div>
                    </div>

                    <div className='item'>
                        <div className='team-card'>
                            <div className='team-img'>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHmaQghSvIMSA/profile-displayphoto-shrink_400_400/0/1637782669407?e=1652918400&v=beta&t=8NM7qM7ebDC0wCsOO86q100__qL2kMuPVbhOErx70zI"></img>
                                <div className='social-media-icons'>
                                    <div className='icons-div'>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.facebook.com/profile.php?id=100012983831121" target="_blank"><FaFacebookF /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://twitter.com/Test_drive_mars" target="_blank"><FaTwitter /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.linkedin.com/in/shahbaz-ali-827485108/" target="_blank"><FaLinkedinIn /></a></span>
                                        <span className='social-media-icon'><a class="link_color_gray" href="https://www.instagram.com/shahbaz__ali_/" target="_blank"><FaInstagram /></a></span>
                                    </div>
                                </div>
                            </div>
                            <div className='team-details-div'>
                                <p className='team-name'>Shahbaz Ali</p>
                                <p className='team-position'>Chief Technology Officer (CTO)</p>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Team
