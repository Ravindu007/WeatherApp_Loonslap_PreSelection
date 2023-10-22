import React, { useEffect, useState } from 'react'
import SearchForecast from '../forcastCard/SearchForecast'


const SearchResult = ({results, forcastResults}) => {


  const [isShow3DayForcast, setIsShow3DayForcast] = useState(true)
  const [isShow7DayForcast, setIsShow7DayForcast] = useState(false)


  return (
    <div className='pl-2 bg-slate-300 min-h-full rounded-md md:text-sm'>
      <div className="row">
        <div className="col-5 flex  flex-col justify-center items-center">
           <h1 className='text-base'>{results.name}</h1>
           <h1 className='text-xs'>{results.sys.country}</h1>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-6 flex justify-start items-center">
              <h1>{results.weather[0].description}</h1>
            </div>
            <div className="col-6 flex justify-start items-center">
              <img width={50} height={50} src={`http://openweathermap.org/img/w/${results.weather[0].icon}.png`} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 flex justify-start items-center">
              <h1>{results.main.temp}</h1>
            </div>
            <div className="col-6 flex justify-start items-center">
              <h1>{results.main.humidity}</h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-2 bg-white">
        <div className="forecastData  w-full">
            <div className="coming-days md:flex flex-col px-2 py-1 bg-slate-200">

                  {/* 3 day forcast */}
                    {isShow3DayForcast && (
                      <div className="3-dayForcast col-12 md:max-h-[176px] md:min-h-[176px] overflow-y-scroll">
                      {forcastResults && forcastResults.map((forecast, index) => {
                            // Calculate the day index (0-4) and the time index (0-7)
                            const dayIndex = Math.floor(index / 8);
                            const timeIndex = index % 8;

                            // Check if this is one of the desired times (1, 9, 17) and within the first 3 days
                            if (timeIndex === 1 || timeIndex === 9 || timeIndex === 17) {
                              if (dayIndex < 3) {
                                // Process the forecast data for the desired times and days
                                return (
                                  <SearchForecast key={index} item={forecast} parent="3day"/>
                                );
                              }
                            }
                      })}
                      </div>
                    )}
                      {/* 7 day forcast */}
                     {isShow7DayForcast && (
                      <div className="7-dayForcast col-12 md:max-h-[176px] overflow-y-scroll">
                      {forcastResults &&
                        forcastResults.map((forecast, index) => {
                          // Calculate the day index (0-6) and the time index (0-7)
                          const dayIndex = Math.floor(index / 8);
                          const timeIndex = index % 8;
                    
                          // Define an array of desired time indices
                          const desiredTimeIndices = [1, 9, 17, 25, 33, 41, 49];
                    
                          // Check if this is one of the desired times and within the first 7 days
                          if (dayIndex < 7 && desiredTimeIndices.includes(timeIndex)) {
                            return (
                              <SearchForecast key={index} item={forecast} parent="7day"/>
                            );
                          }
                    
                          return null; // Skip other data points
                        })}
                    </div>
                    
                    )}

                    <div className="col-12 flex justify-center my-2">
                      <button 
                        className='btn bg-slate-300 w-2/3'
                        onClick={()=>{
                          setIsShow7DayForcast(!isShow7DayForcast)
                          setIsShow3DayForcast(!isShow3DayForcast)
                        }}
                      >{isShow3DayForcast ? "View 5 Day forcast" : "Back"}</button>
                    </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult