import React from 'react'

const ForcastCard = ({item, customclass}) => {

  return (
    <div className={`ForcastCard col-sm-12 flex flex-col items-center bg-slate-300 mx-1 rounded-md ${customclass}`}>
      <p>{item.dt_txt}</p>
      <p>{item.weather[0].description}</p>
      <img width={50} height={50} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
      <p>{item.main.temp}</p>
    </div>
  )
}

export default ForcastCard