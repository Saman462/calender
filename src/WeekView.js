import React from 'react'
import EventComponent from './components/EventComponent'
const WeekView = () => {
    return (
        <div>  <div className='grid-container-two'>
            <div class="grid-item-1">Sun</div>
            <div class="grid-item-1">Mon</div>
            <div class="grid-item-1">Tue</div>
            <div class="grid-item-1">Wed</div>
            <div class="grid-item-1">Thurs</div>
            <div class="grid-item-1">Fri</div>
            <div class="grid-item-1">Sat</div>
        </div>
            <div className='day-container'>
                <div className='allday-container'>
                    <p className='time-p'>all-day</p>
                </div>
            </div>
            <div className='daily-component'>
                <div className='allday-component'>
                    <p className='time-p'>11am</p>
                </div>
                <EventComponent />
            </div>
            <div className='daily2-component'>
                <div className='allday2-component'>

                </div>
            </div>




        </div>

    )
}

export default WeekView