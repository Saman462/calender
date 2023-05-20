import React from 'react'

const EventComponent = () => {
    const day = "Wednesday"
    const from = "11 am"
    const to = "5 am"
    const eventTitle = "Task for this time"
    return (
        <div className='event-div'><p className='event-p'>{from}-{to}-{eventTitle}</p></div>
    )
}
export default EventComponent