import React from 'react'
import Logo from './images/logo.png'
import mail from './images/mail.png'
import number from './images/contact-number.png'
import address from './images/address.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import {FiSend} from 'react-icons/fi'
import { message } from 'antd';
import './footer.scss'

function Footer() {
    const error = (msg) => {
        message.error(msg);
    };

    const success = (msg) => {
        message.success(msg);
    };
    
    const process = (msg) => {
        message.loading(msg);
    };
    const handleEmail = () => {
        const email = document.getElementById("newsletterField").value
        if(email.includes('@gmail.com')){
            process('Adding Email')
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        
            var raw = JSON.stringify({
                "email": email
            });
        
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
        
            fetch("http://localhost:5000/newsletter/add_email", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result['code'] === 200){
                    success(result['message'])
                    document.getElementById('newsletterField').value = ''
                }else{
                    error(result['message']);
                }
            })
            .catch(error => console.log('error', error));
        }else{
            error('Invalid Email!')
        }
    }
    return (
        <div className='footer-outer-div'>
            <div className='row footer-inner-div'>
                <div className='col-12 col-md-4 col-lg-4 col-xl-6'>
                    <div className='row footer-inner-div'>
                        <div className='col-12 col-xl-6 footer-logo-div'>
                            <img className='footer-logo' src={Logo} alt='logo'/>
                        </div>
                        <div className='col-12 col-lg-12 col-xl-6'>
                            <p className='footer-title'>SERVICES.<div className='footer-title-underline'/></p>
                            <div className='footer-services'>
                                <a href='/services/ml'>Machine Learning</a>
                                <a href='/services/ai'>Artificial Intelligence</a>
                                <a href='/services/blockchain'>Blockchain Development</a>
                                <a href='/services/cloud'>Cloud Computing</a>
                                <a href='/services/mobile_app'>Mobile Application Development</a>
                                <a href='/services/web_app'>Website Development</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8 col-lg-8 col-xl-6'>
                    <div className='row footer-inner-div'>
                        <div className='mobile-view-edit col-12 col-md-6'>
                            <p className='footer-title'>EXPLORE.<div className='footer-title-underline'/></p>
                            <div className='footer-services'>
                                <a href='/home'>Home</a>
                                <a href='/home/about'>About Us</a>
                                <a href='/home/portfolio'>Portfolio</a>
                                <a href='/careers'>Career</a>
                                <a href='/contact'>Contact Us</a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <p className='footer-title'>CONTACT.<div className='footer-title-underline'/></p>
                            <div className='footer-contact-details-div'>
                                <span><img className='address-icon' src={address} alt='address'/>Austr. 22 90429, Nuremberg, Germany</span>
                                <a href='tel:6236664257'><img className='number-icon' src={number} alt='address'/>+491771389481</a>
                                <a href='mail:test@test.com'><img className='mail-icon' src={mail} alt='address'/>info@deepfusion.ai</a>
                            </div>
                            <label className='newsletter-label'>Newsletter</label>
                            <div className='newsletter-div'>
                                <span onClick={handleEmail}><FiSend /></span>
                                <input type='text' onKeyPress={e => e.key === 'Enter' && handleEmail()} id='newsletterField' placeholder='Your Email' className='newsletter_field'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom-div'>
                <p>&copy; All Rights Reserved, DeepFusion Private Limited</p>
                <div>
                    <span className='bottom-icon'><a class="link_color_gray" href="https://www.facebook.com/deepfusionofficial" target="_blank"><FaFacebookF /></a></span>
                    <span className='bottom-icon'><a class="link_color_gray" href="https://twitter.com/deepfusion_ai" target="_blank"><FaTwitter /></a></span>
                    <span className='bottom-icon'><a class="link_color_gray" href="https://www.linkedin.com/company/deepfusionofficial/?viewAsMember=true" target="_blank"><FaLinkedinIn /></a></span>
                    <span className='bottom-icon'><a class="link_color_gray" href="https://www.instagram.com/deepfusionofficial/" target="_blank"><FaInstagram /></a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
