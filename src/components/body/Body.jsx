import React, { useState } from 'react'
import "./Body.css"
import Part1 from './subComponents/Part1/Part1'
import Part2 from './subComponents/Part2/Part2'

function Body({weather, forecast}) {
  return (
    <div className='body-container'>
        <Part1 weather={weather} />
        <Part2 weather={weather} forecast={forecast} />
    </div>
  )
}

export default Body;