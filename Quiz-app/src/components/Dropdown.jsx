import React from 'react'
import './Dropdown.css'

function dropdown({data, setDifficultyChange}) {
  return (
    <div className='dropdown'>
        <select name="" id="" onChange={(e) => setDifficultyChange(e.target.value)}>
            {
                data.map((dt,i)=>(
                    <option key={i}value={dt}>{dt}</option>
                ))
            }

        </select>

    </div>
  )
}

export default dropdown