import React from 'react'
const DailyView = () => {
    // const TimeList=[
    //   "12am",
    //   "01am",
    //   "02am",
    //   "03am",
    //   "04am",
    //   "05am",
    //   "06am",
    //   "07am",
    //   "08am",
    //   "09am",
    //   "10am",
    //   "11am",
    //   "01"

    // ]
    return (
        <>
            <div className='daily-container'>
                <h3>Saturday</h3>
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
            </div>
            <div className='daily2-component'>
                <div className='allday2-component'>
                </div>
            </div>
        </>
    )
}
export default DailyView