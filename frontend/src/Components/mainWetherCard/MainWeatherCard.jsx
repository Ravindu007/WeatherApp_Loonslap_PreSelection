import React, { useEffect, useState } from 'react'

const MainWeatherCard = ({weather}) => {

  return (
    <div className='weatherCard  col-12 bg-slate-200 rounded-md'>
     
    <div className="row md:h-80">
        {/* left part */}
        <div
           className="col-sm-12 col-md-6 h-[200px] md:h-full bg-cover bg-center rounded-md"
           style={{
             backgroundImage: 'url("./assets/colombo.jpg")'
           }}
        >
            <h1 className='text-5xl'>{weather.name}</h1>
            <h1 className='text-3xl'>{weather.sys.country}</h1>
            <h1 className='text-1xl'>{}</h1> 
        </div>

        {/* right part */}
        <div className="col-sm-12 col-md-6 text-3xl h-full">

            <div className="row h-[50%]">
              <div className="col-6 border-2">
                <div className="inner flex flex-col items-center justify-center m-1 bg-slate-300 h-[80%] rounded-md pl-2 shadow-md shadow-slate-400">
                  <h1 className='text-2xl md:text-3xl'>{weather.weather[0].description}</h1>
                </div>
              </div>
              <div className="col-6 border-2">
                <div className="inner flex flex-col items-center justify-center m-1 bg-slate-300 h-[80%] rounded-md shadow-md shadow-slate-400">
                  <img width={75} height={75} src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
                </div>
              </div>
            </div>

            <div className="row h-[50%]">
              <div className="col-6 border-2">
                <div className="inner flex flex-col items-center justify-center m-1 bg-slate-300 h-[80%] rounded-md shadow-md shadow-slate-400">
                  <img src="./assets/icons/temp.svg" width={30} alt="" />
                  <h1 className=''>{weather.main.temp} &#8451;</h1>
                </div>
              </div>
              <div className="col-6 border-2">
                <div className="inner flex flex-col items-center justify-center m-1 bg-slate-300 h-[80%] rounded-md shadow-md shadow-slate-400">
                  <img src="./assets/icons/humidity.svg" width={50} alt="" />
                  <h1 className=''>{weather.main.humidity} %</h1>
                </div>
              </div>
            </div>
      </div>
      
    </div>
    </div>
  )
}

export default MainWeatherCard