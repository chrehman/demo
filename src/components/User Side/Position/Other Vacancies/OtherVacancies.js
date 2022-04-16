import React from 'react'
import { DoubleRightOutlined } from '@ant-design/icons';
import './othervacancies.scss'

function OtherVacancies(props) {
    
    return (
        <div className='other-vacancies-outer-div'>
            <div className='other-vacancies-title'>OTHER VACANCIES.<div className='other-vacancies-title-underline'/></div>
            {
                props.Vacancies !== [] ?
                <div className='vacancies-div'>
                    {
                        props.Vacancies.map(vacancie => <div key={vacancie._id}>
                            <div className='other-vacancie-div'>
                                <p id='test' className='job-title'>{vacancie.title}</p>
                                <a href={`/position/${vacancie._id}`} className='apply-btn'>
                                    Apply Now
                                </a>
                            </div>
                        </div>)
                    }
                    <div>
                    {
                        props.page !== 0 ? <span onClick={() => props.getVacancies(props.page)} className='d-flex justify-content-end all-vacancies-link'>Load More <DoubleRightOutlined /></span> : <span/>
                    }
                    </div>
                </div>
                :
                <div/>
            }
        </div>
    )
}

export default OtherVacancies
