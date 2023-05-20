import React from 'react'

const MonthListAdapter = () => {
    const { JsonCalendar } = require('json-calendar')
    const calendar = new JsonCalendar()
    calendar.weeks.map(week => {
        week.map(day => {
            const { date, monthIndex, year } = day
            // do something with the day's data
            return <div>date.toLocaleString()</div>
        })
    })
}
export default MonthListAdapter