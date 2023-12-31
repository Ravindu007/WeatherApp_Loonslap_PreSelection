import React, { useEffect, useState } from 'react'
import MainWeatherCard from '../Components/mainWetherCard/MainWeatherCard'
import ForcastCard from '../Components/forcastCard/ForcastCard'
import SearchComponent from '../Components/serachComponent/SearchComponent'
import Navbar from '../Components/Navbar/Navbar'
import useTextAnimation from '../hooks/UseTextAnnimation'

const Home = () => {

    const buttonText = useTextAnimation(['View 5 Day Forcast'], 100, 100);


    const [isLoadingColombo, setIsLoadingColombo] = useState(true)
    const [allWetherData,setAllWeatherData] = useState(null)

    const [isForcastLoaded, setIsForcastLoaded] = useState(true)
    const [weatherForcast, setWeatherForcast] = useState(null)


    const [isShow3DayForcast, setIsShow3DayForcast] = useState(true)
    const [isShow7DayForcast, setIsShow7DayForcast] = useState(false)
  
    useEffect(()=>{

      //current weather in colombo
      const fetchColomboWetherData = async() => {
        //call the API for colombo data
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=6.927079&lon=79.861244&units=metric&appid=f20a26820745e14758cd4168868cbed1");
        const json = await response.json();
  
        if(response.ok){
          setIsLoadingColombo(false)
          setAllWeatherData(json)
        }
      }

      //3dyas weather forcast 
      const weatherForcastInColombo = async() => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=6.927079&lon=79.861244&units=metric&exclude={hourly}&appid=f20a26820745e14758cd4168868cbed1")
        const json = await response.json();

        if(response.ok){
          setIsForcastLoaded(false)
          setWeatherForcast(json.list)
          //console.log(weatherForcast);
        }
      }
  
      fetchColomboWetherData()
      weatherForcastInColombo()

    },[])
  
  return (
    <div>
      <div className="container-1 w-full bg-slate-200">

        <div className="row">
            <Navbar/>
        </div>

        <div className="row mt-10 md:mt-0">
          {/* left pannel */}
          <div className="col-sm-12 col-md-7  px-4 py-2">

              {isLoadingColombo ? <p>Loading...</p> : (
                <>
                  {/* colombo card */}
                  <MainWeatherCard  weather={allWetherData}/>
                </>
              )}


              {/* up coming days weather of colombo */}
              <div className="coming-days md:flex px-2 py-3 flex-col items-center bg-slate-200">
                {isForcastLoaded ? <p>Loading...</p> : (
                  <>
                  {/* 3 day forcast */}
                    {isShow3DayForcast && (
                      <div className="3-dayForcast col-12 flex flex-row justify-center overflow-x-scroll md:overflow-x-auto">
                      {weatherForcast && weatherForcast.map((forecast, index) => {
                            // Calculate the day index (0-4) and the time index (0-7)
                            const dayIndex = Math.floor(index / 8);
                            const timeIndex = index % 8;

                            // Define the class based on conditions
                            const customClass = dayIndex < 3 ? 'col-sm-12 col-md-3' : '';

                            // Check if this is one of the desired times (1, 9, 17) and within the first 3 days
                            if (timeIndex === 1 || timeIndex === 9 || timeIndex === 17) {
                              if (dayIndex < 3) {
                                // Process the forecast data for the desired times and days
                                return (
                                  <ForcastCard key={index} item={forecast} customclass={customClass} parent="3day"/>
                                );
                              }
                            }
                      })}
                      </div>
                    )}
                      {/* 7 day forcast */}
                     {isShow7DayForcast && (
                      <div className="7-dayForcast col-12 flex justify-center overflow-x-scroll md:overflow-x-auto ">
                      {weatherForcast &&
                        weatherForcast.map((forecast, index) => {
                          // Calculate the day index (0-6) and the time index (0-7)
                          const dayIndex = Math.floor(index / 8);
                          const timeIndex = index % 8;
                    
                          // Define an array of desired time indices
                          const desiredTimeIndices = [1, 9, 17, 25, 33, 41, 49];

                          // Define a class based on conditions
                          const customClass = dayIndex < 7 && desiredTimeIndices.includes(timeIndex)
                          ? 'col-sm-12 col-md-2' // Specify your custom class name here
                          : '';
                    
                          // Check if this is one of the desired times and within the first 7 days
                          if (dayIndex < 7 && desiredTimeIndices.includes(timeIndex)) {
                            return (
                              <ForcastCard key={index} item={forecast} customclass={customClass} parent="7day"/>
                            );
                          }
                    
                          return null; // Skip other data points
                        })}
                    </div>
                    
                    )}

                    <div className="col-12 flex justify-center my-2">
                      <button 
                        className='btn btn-outline-secondary h-7 flex items-center justify-center w-2/3'
                        style={{fontWeight:'400'}}
                        onClick={()=>{
                          setIsShow7DayForcast(!isShow7DayForcast)
                          setIsShow3DayForcast(!isShow3DayForcast)
                        }}
                      >{isShow3DayForcast ? buttonText : "Back "}</button>
                    </div>
                  </>
                )}
              </div>

          </div>



          {/* search pannel */}
          <div className="col-sm-12 col-md-5 px-4">
            <SearchComponent/>
          </div>  

        </div>
      </div>
    </div>
  )
}

export default Home