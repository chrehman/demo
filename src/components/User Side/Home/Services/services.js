import React from 'react'
import AIService from './images/AI-Service.png'
import BDService from './images/Big-Data-Service.png'
import BlockService from './images/Blockchain-Service.png'
import CloudService from './images/Cloud-Service.png'
import DataService from './images/Data-Service.png'
import DigitalService from './images/Digital-Market-Service.png'
import MLService from './images/ML-Service.png'
import MAService from './images/Mobile-App-Service.png'
import WAService from './images/Web-App-Service.png'
import './services.scss'

function services(props) {
    return (
        <div ref={props.ServiceRef} className='services-outer-div'>
            <span className='services-title'>SERVICES.<div className='services-title-underline'/></span>
            <div className='services'>
                <div className='cards'>
                    <a href='/services/ai' className='card'>
                        <p className='card-title'>Artificial Intelligence</p>
                        <div className='card-img'><img src={AIService} alt='AI'/></div>
                        <p className='card-discription'>The key to artificial intelligence has always been the representation.</p>
                    </a>

                    <a href='/services/ml' className='card'>
                        <p className='card-title'>Machine Learning</p>
                        <div className='card-img'><img src={MLService} alt='ML'/></div>
                        <p className='card-discription'>Predicting the future isn’t magic, it’s Machine Learning</p>
                    </a>

                    <a href='/services/blockchain' className='card'>
                        <p className='card-title'>Blockchain</p>
                        <div className='card-img'><img src={BlockService} alt='blockchain'/></div>
                        <p className='card-discription'>Blockchain is the tech. Bitcoin is merely the first mainstream manifestation of its potential.</p>
                    </a>

                    <a href='/services/mobile_app' className='card'>
                        <p className='card-title'>Mobile Application</p>
                        <div className='card-img'><img src={MAService} alt='Mobile-APP'/></div>
                        <p className='card-discription'>Your mobile device has quickly become the easiest portal into your digital self.</p>
                    </a>

                    <a href='/services/web_app' className='card'>
                        <p className='card-title'>Web Application</p>
                        <div className='card-img'><img src={WAService} alt='Web-App'/></div>
                        <p className='card-discription'>Website without visitors is like object lost in black hole.</p>
                    </a>

                    <a href='/services/cloud' className='card'>
                        <p className='card-title'>Cloud Computing</p>
                        <div className='card-img'><img src={CloudService} alt='Cloud'/></div>
                        <p className='card-discription'>Computing is not about computers any more. It is about living.</p>
                    </a>

                    <a href='/services/data_science' className='card'>
                        <p className='card-title'>Data Science</p>
                        <div className='card-img'><img src={DataService} alt='Data'/></div>
                        <p className='card-discription'>It’s easy to lie with statistics It’s hard to tell the truth without statistics.</p>
                    </a>

                    <a href='/services/big_data' className='card'>
                        <p className='card-title'>Big Data</p>
                        <div className='card-img'><img src={BDService} alt='Big-Data'/></div>
                        <p className='card-discription'>Without big data, you are blind and deaf and in the middle of a freeway.</p>
                    </a>

                    <a href='/services/digital_media' className='card'>
                        <p className='card-title'>Digital Media Marketing</p>
                        <div className='card-img'><img src={DigitalService} alt='Digital'/></div>
                        <p className='card-discription'>Think about what the user is going to type.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default services
