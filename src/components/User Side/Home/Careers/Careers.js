import React from 'react'
import './career.scss'

function Careers(props) {
    return (
        <div ref={props.CareerRef} className='career-outer-div'>
            <span className='career-title'>JOIN OUR TEAM.<div className='career-title-underline'/></span>
            <p className='career-text'>Interested in joining our team ? <span>View Our Openings</span></p>
            <a href='/careers' className='career-btn'>Careers</a>
        </div>
    )
}

export default Careers
