import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './client_feedback.scss'
import { Modal } from 'antd';

function Client_Feedback() {
    const [modelVisible, setModelVisible] = useState(false)

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    const options = {
        autoplay: true,
        autoplayHoverPause:true,
        loop: true,
        center: true,
        nav: false,
        dots: false,
        responsiveClass:true,
        responsive: {
            2560:{
                items:5
            },
            1680:{
                items:4
            },
            1440:{
                items:3
            },
            1024:{
                items:3,
            },
            912:{
                items:2,
            },
            820:{
                items:2,
            },
            768:{
                items:2,
            },
            540:{
                items:1,
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

    // const handleModel = () => {

    // }

    return (
        <div className='feedback-outer-div'>
            {/* <span className='feedback-title'>CLIENTS FEEDBACK.<div className='feedback-title-underline'/></span> */}
            {/* <Modal
                centered
                visible={modelVisible}
                footer={false}
                onCancel={() => setModelVisible(false)}
                >
                    <div className='model-feedback-card'>
                        <p></p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Jordan Fens 
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={4}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </Modal> */}
            <OwlCarousel
                className="owl-theme"
                {...options}
            >
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p id='feedback1' >
                        I really appreciate the effort Ali and his whole team has put in my projects. For now I subscribed for one service, hope to have more business ventures together in coming week. Thanks for your time and hardwork Ali.
                            </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>melissa-tapia (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Shahbaz is an amazingly talented young man, with a keen desire to help his customer solve real-world problems through the AI tech stack. Shahbaz has a great future as a data scientist, you'll be amazed by the final product delivered by Shahbaz and his team of data scientists.  
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Gus Sanchez (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Amazing work - delivered a full-stack web application with backend analytics integration, and took extra care to make sure to provide exceptional user experience in the site build out. Always excellent deliveries!

                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>sarakimmich (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Incredible work, built out a full website, with backend analytics. Fast and responsive delivery, work always exceeds expectations. Can't recommend enough!
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>sarakimmich (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Shahzaib Ali does a phenomenal job. I started with one project and i continue to engage him for more.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Omair Hashmi (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        I have tried many Artificial Intelligence Engineer in market. But team deepfusion have great expertise in whole stack of data science. Highly recommend. Will definitely come again in coming week for more work. Thanks for your continous support during the development. Appreciated.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>ronald-fontecchi (Norway)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        I Enjoyed meeting with Mr. Shahzaib It was a very helpful consulting.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>hatemem (Saudi Arabia)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>The project cost is USD *******. He is knowledgeable and spent the time to make sure the delivery is met. The seller willing to explain the walkthrough and questions, also does smoke through in few questions... but it up to personal preferences if acceptable level or not... Overall everyone is my team accept the work delivered.</p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>limenhui (Singapore)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Thanks for a quick and good delivery!
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Elisa Beth (Norway)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        The team deepfusion works fast and competently and exceeded my expectations. They went above and beyond my requirements. Highly recommended and will use his services again
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>samuel (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        My name is Ken Poindexter Jr, Founder of Haptic Zones Technology. I have years of experience working with software developers and have seen many young professionals come and go. Ali is one of the best, brightest and most innovative developers I have ever worked with in the industry. He uniquely stands out because of his ability to listen, implement and constantly seek solutions to any problem.
As we have had the pleasure to work with Ali on many projects. He is one of the most innovative AI and machine learning developers I have ever worked with in the industry. He is also extremely resourceful across a variety of technological fields. Ali displayed leadership, creativity and eagerness to find a solution to every problem we had as a client. When we first met, I was impressed by his positive attitude regardless of the task set out for him. I highly recommend Ali and his firm for any development project, task partnership as I am sure he will exceed your expectations.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Ken Poindexter (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Excellent work. Team has good technical knowledge and was able to provide solutions for some complex requirements on my e-commerce site. He has excellent design skills and asking pertinent questions to ensure he has understood all requirements.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Hennerson (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        He has a dynamic team and they deliver really fast. He gives a lot to make you happy. The right person for nlp tasks. I would definitely recommend working with him.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Hennerson (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        I have worked with many sellers in this platform before, but no one had such professionalism and respect towards the client. I totally recommend him !
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Erickson Matos (Portugal)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Very knowledgeable in their field of work and has been such a great seller to work with. Always on time and keep you updated throughout the whole process and if there is any amending is required. You won't be left with a bad project at all. He will ensure it is completed to the utmost quality.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Confidential (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        I've worked with Shahzaib Ali on several machine learning projects, particularly in the NLP domain, and personally overseen his work with semantic processing, clustering, and predictive algorithms. He's not just a great developer, but an excellent technical communicator. I can't recommend Shahzaib enough as an insightful and exceptional end-to-end data science developer, and he's added value to every team I've brought him onto. 
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Sal Kimmich CMS (United Kingdom)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        I will have to say that It has been a pleasure working with Ali. Right before I hire Ali, I had a bad experience with another development firm. So I had started working with a subjective a very skeptical perspective. As we started collaborating this skepticism got eliminated really fast. Ali is extremely talented in this field and I truly believe that if you got to work with Ali you would be working with the cream on the crop in this field. His knowledge in the field is extensive a long with his ability to learn any thing new. I say this because the area in which I needed AI application was new to Ali, but he was able to grab the nuances of this field real fast and now half way through the project he has delivered and shown tangibly some amazing results. I would highly recommend him
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Samad Siddiqui (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Shahbaz has done an excellent job with the project so far. He takes pride in his work and has pig passion about the field of AI. His vast experience is reflected with different suggestion he has made and our product so far has exceeded expectations. I would highly recommend him for good quality work.
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Samad Siddiqui (United States)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item' onClick={() => {setModelVisible(true)}}>
                    <div className='feedback-card'>
                        <p>
                        Shahbaz and the team were fantastic. They were very responsive and filled me with confidence that they were focused on my work and building an app that will be best of breed for a long time to come. I would recommend Shahbaz to anyone looking for a full-stack developer. He brought in team members that were specialists in an area so that I could get the best possible result."
                        </p>
                        <div className='d-flex client-details'>
                            <span className='client-avatar'></span>
                            <span className='client-name'>Jorden Fens (Australia)
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                edit={false}
                                value={5}
                                size={20}
                                activeColor="#ffd700"
                            />
                            </span>
                        </div>
                    </div>
                </div>
                
            </OwlCarousel>
        </div>
    )
}

export default Client_Feedback
