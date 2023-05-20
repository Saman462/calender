import React from 'react'
import Delete from "../assets/icons8-delete-48.png"
const EventCard = () => {
    return (
        <div className='card'>
            <div className='card-content'>
                <h4>Add Evet</h4>
                <input type='text' className='title' placeholder='Title'></input>
                <input className='description'
                    type="text " placeholder='Description'></input>
                <div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label> All day
                </div>
                <div className='textfield'>
                    <label class="pure-material-textfield-outlined">
                        <input />
                        <span>Start Date</span>
                    </label>
                    <label class="pure-material-textfield-outlined">
                        <input />
                        <span>End Date</span>
                    </label>
                </div>
                <div className="circles">
                    <div className='circle'></div>
                </div>
                <div className='buttons-last'>
                    <img style={{ height: "20px" }}
                        src={Delete}></img>
                    <div className='buttons'>
                        <button className='cancel'>Cancel</button>
                        <button className='add'>Add</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EventCard