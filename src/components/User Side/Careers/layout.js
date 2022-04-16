import React from 'react'
import Header from './Header/header'
import WhyUs from "./Why Us/Why_Us";
import Vacancies from './Vacancies/Vacancies'
import Footer from '../../../HOC/Footer/Footer';

function layout() {
    return (
        <div>
            <Header/>
            <WhyUs/>
            <Vacancies/>
            <Footer/>
        </div>
    )
}

export default layout
