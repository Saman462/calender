import React from 'react'
import { useState } from 'react'
import MonthListAdapter from './subpages/MonthListAdapter'
const MonthView = () => {
  return (
    <div>
      <div className='grid-container-two'>
        <div class="grid-item-1">Sun</div>
        <div class="grid-item-1">Mon</div>
        <div class="grid-item-1">Tue</div>
        <div class="grid-item-1">Wed</div>
        <div class="grid-item-1">Thurs</div>
        <div class="grid-item-1">Fri</div>
        <div class="grid-item-1">Sat</div>
      </div>
      <MonthListAdapter />
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div>
    </div>
  )
}
export default MonthView 