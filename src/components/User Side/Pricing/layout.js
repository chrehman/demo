import React from 'react'
import Header from './Header/header'
import Packages from './Packages/Packages'
// import Testimonial from './Testimonials/Testimonial'
import Contact from '../../../HOC/Services Components/Contact/Contact'
import Footer from '../../../HOC/Footer/Footer';

function layout() {
    return (
        <div>
            <Header/>
            <Packages/>
            {
                // <Testimonial/>
            }
            <Contact/>
            <Footer/>
        </div>
    )
}

export default layout
