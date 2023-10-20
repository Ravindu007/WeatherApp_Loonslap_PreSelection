import React, { useEffect, useState } from 'react'
import MainWeatherCard from '../Components/mainWetherCard/MainWeatherCard'
import ForcastCard from '../Components/forcastCard/ForcastCard'

const Home = () => {

    const [isLoadingColombo, setIsLoadingColombo] = useState(true)
    const [allWetherData,setAllWeatherData] = useState(null)

    const [isForcastLoaded, setIsForcastLoaded] = useState(true)
    const [weatherForcast, setWeatherForcast] = useState(null)
  
    useEffect(()=>{

      //current weather in colombo
      const fetchColomboWetherData = async() => {
        //call the API for colombo data
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=6.927079&lon=79.861244&units=metric&appid=f20a26820745e14758cd4168868cbed1");
        const json = await response.json();
  
        if(response.ok){
          setIsLoadingColombo(false)
          setAllWeatherData(json)
          //console.log(allWetherData);
        }
      }

      //3dyas weather forcast 
      const weatherForcastInColombo = async() => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=6.927079&lon=79.861244&units=metric&exclude={hourly}&appid=f20a26820745e14758cd4168868cbed1")
        const json = await response.json();

        if(response.ok){
          setIsForcastLoaded(false)
          setWeatherForcast(json.list)
          console.log(weatherForcast);
        }
      }
  
      fetchColomboWetherData()
      weatherForcastInColombo()

    },[])
  
  return (
    <div>
      <div className="container-1 ">
        <div className="row">


          {/* left pannel */}
          <div className="col-sm-12 col-md-7 bg-slate-100 px-5 py-5">

              {isLoadingColombo ? <p>Loading...</p> : (
                <>
                  {/* colombo card */}
                  <MainWeatherCard  weather={allWetherData}/>
                </>
              )}


              {/* up coming days weather of colombo */}
              <div className="coming-days md:flex px-2 py-2 justify-center">
                {isForcastLoaded ? <p>Loading...</p> : (
                  <>
                   {weatherForcast && weatherForcast.map((forecast, index) => {
                          // Calculate the day index (0-4) and the time index (0-7)
                          const dayIndex = Math.floor(index / 8);
                          const timeIndex = index % 8;

                          // Check if this is one of the desired times (1, 9, 17) and within the first 3 days
                          if (timeIndex === 1 || timeIndex === 9 || timeIndex === 17) {
                            if (dayIndex < 3) {
                              // Process the forecast data for the desired times and days
                              return (
                                <ForcastCard key={index} item={forecast} />
                              );
                            }
                          }

                    })}

                  </>
                )}
              </div>

          </div>



          {/* search bar */}
          <div className="col-sm-12 col-md-5 border-red-500 border-2">
            <h1>World</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home