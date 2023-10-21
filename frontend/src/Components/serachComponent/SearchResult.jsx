import React from 'react'

const SearchResult = ({results}) => {
  return (
    <div className='bg-slate-300 rounded-md px-2 py-2'>
      <h1 className='text-2xl'><span>City: </span>{results.name}</h1>
      <h1 className='text-2xlxl'><span>Weather: </span>{results.weather[0].description}</h1>
      <img width={50} height={50} src={`http://openweathermap.org/img/w/${results.weather[0].icon}.png`} alt="" />
      <h1 className='text-2xl'><span>Temperature: </span>{results.main.temp}</h1>
    </div>
  )
}

export default SearchResult