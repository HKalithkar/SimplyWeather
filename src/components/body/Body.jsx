import React, { useState } from 'react'
import Part1 from './subComponents/Part1/Part1'
import Part2 from './subComponents/Part2/Part2'

function Body({weather, forecast}) {
  return (
    <div className='body-container'>
        <Part1 weather={weather} />
        <Part2 forecast={forecast} weather={weather} />
    </div>
  )
}

export default Body