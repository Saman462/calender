import React from 'react'

const AgendaView = () => {
    const day = "Wednesday"
    const from = "11am"
    const to = "5am"
    const eventTitle = "Event Title"
    const eventDescription = "Event Description"
    const date = "May 17,2023"
    return (
        <div>
            <div className='day'><h4 className='h4-agenda-day'>{day}</h4>
                <h4 className='h4-agenda-date'>{date}</h4>
            </div>
            {/* component code  */}
            <div className='agenda'>
                <div className='timing'>
                    <p>{from}-{to}</p>
                </div>
                <div className='circle' />
                <div className='body'>
                    <p>{eventTitle}:</p>
                    <p>{eventDescription}</p>
                </div>
            </div>

        </div>


    )
}

export default AgendaView