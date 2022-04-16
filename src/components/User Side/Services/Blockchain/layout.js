import React from 'react'
import Header from './Header/header'
import Services from './Services/Services'
import Collaborate from '../../../../HOC/Services Components/Collaborate/Collaborate'
// import Questions from './Asked Questions/Questions'
import Contact from '../../../../HOC/Services Components/Contact/Contact'
import Footer from '../../../../HOC/Footer/Footer';


function layout() {
    return (
        <div>
            <Header/>
            <Services/>
            <Collaborate/>
            {/* <Questions/> */}
            <Contact/>
            <Footer/>
        </div>
    )
}

export default layout
