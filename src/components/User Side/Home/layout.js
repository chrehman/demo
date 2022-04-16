import React, { useEffect, useRef } from 'react'
import Header from './Header/header'
import About from './About/about'
import Services from './Services/services'
import Portfolio from './Portfolio/portfolio'
import Count from './Company Count/count'
import ClientFeedback from './Client Feedback/Client_Feedback'
import Team from './Team/Team'
import Careers from './Careers/Careers'
import Contact from './Contact Us/Contact'
import Footer from '../../../HOC/Footer/Footer';


function Layout() {

    const AboutRef = useRef(null);
    const PortfolioRef = useRef(null);
    const ServiceRef = useRef(null);
    const CareerRef = useRef(null);

    useEffect(() => {
        const list = window.location.href.split('/')
        const name = list[list.length - 1]
        switch (name) {
            case 'about':
                window.scrollTo({ behavior: 'smooth', top: AboutRef.current.offsetTop })
                break;
            case 'portfolio':
                window.scrollTo({ behavior: 'smooth', top: PortfolioRef.current.offsetTop })
                break;
            case 'services':
                window.scrollTo({ behavior: 'smooth', top: ServiceRef.current.offsetTop })
                break;
            default:
                break;
        }
    }, [])

    return (
        <div>
            <Header AboutRef = {AboutRef} PortfolioRef = {PortfolioRef} CareerRef = {CareerRef} ServiceRef = {ServiceRef}/>
            <About AboutRef = {AboutRef}/>
            <Services ServiceRef = {ServiceRef}/>
            <Portfolio PortfolioRef = {PortfolioRef}/>
            <Count/>
            <ClientFeedback/>
            <Team/>
            <Careers CareerRef = {CareerRef}/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Layout
