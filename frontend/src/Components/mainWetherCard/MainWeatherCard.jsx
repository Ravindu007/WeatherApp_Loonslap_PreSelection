import React, { useEffect, useState } from 'react'

const MainWeatherCard = ({weather}) => {

  return (
    <div className='weatherCard  col-sm-12 col-md-12 flex flex-col items-center bg-slate-300 px-2 py-2 rounded-md'>
      <h1 className='text-7xl'>{weather.name}</h1>
      <h1 className='text-5xl'>{weather.weather[0].description}</h1>
      <img width={250} height={250} src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
      <h1 className='text-4xl'>{weather.main.temp}</h1>
    </div>
  )
}

export default MainWeatherCard