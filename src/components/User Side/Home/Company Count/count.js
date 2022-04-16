import React from 'react'
import { Waypoint } from 'react-waypoint';
import './count.scss'

function count() {
    const handleCounter = () => {
        const speed = 1000;

        document.querySelectorAll('#counter').forEach(counter => {

            const counterNumber = +counter.getAttribute('countTo');

            const updateCount = setInterval(() => {
                
                const divContent = +counter.innerText;
                const increaseBy = counterNumber / speed;

                divContent < counterNumber ? 
                counter.innerHTML = Math.ceil(divContent + increaseBy) : 
                clearInterval(updateCount);

            }, 1);

        });
    }
    return (
        <div className='count-outer-div'>
            <div className='count-inner-div'>
                <Waypoint onEnter={handleCounter}>
                    <div className='counts-div'>
                        <div className='count-div'>
                            <h1 id='counter' countTo='7'></h1>
                            <p>Years</p>
                        </div>
                        <div className='count-divider'/>
                        <div className='count-div'>
                            <h1 id='counter' countTo='2'></h1>
                            <p>Awards</p>
                        </div>
                        <div className='center-divider count-divider'/>
                        <div className='count-div'>
                            <span className='counter'><span id='counter' countTo='100'></span>+</span>
                            <p>Projects</p>
                        </div>
                        <div className='count-divider'/>
                        <div className='count-div'>
                            <span className='counter'><span id='counter' countTo='98'></span>%</span>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </Waypoint>
            </div>      
        </div>
    )
}

export default count
