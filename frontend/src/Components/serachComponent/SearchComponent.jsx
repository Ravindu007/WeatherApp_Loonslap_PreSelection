import React, { useState } from 'react'
import SearchResult from './SearchResult'
import LoadingCard from './LoadingCard'

const SearchComponent = () => {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLogitude] = useState(null)

  const [error , setError] = useState(null)

  //where we save data for that day
  const [results, setResults] = useState(null)

  //forcast results
  const [forcastResults, setForcastResults] = useState(null)

  //waiting till we generate results
  const [isLoading, setIsLoading] = useState(true)
  const [isforcastingLoading , setIsForcastingLoading] = useState(true)

  //whether or not show the LoadCard
  const [isLoadCardShowing , setIsLoadCardShowing] = useState(true)

  const handleSubmit = async(e) => {
    e. preventDefault();

    if(!latitude || !longitude ){
      setError("Please Enter a value")
      setIsLoadCardShowing(true)
    }

    if(latitude && longitude){
      if((latitude >= -90 && latitude <= 90) || (longitude >= -180 && longitude <= 180) ){
        setError("Please enter valid Latitude and Longitude")
        setIsLoadCardShowing(true)
      }
    }
    
    // send API request => one day
    const responseOneDay = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f20a26820745e14758cd4168868cbed1`)
    const jsonOneDay = await responseOneDay.json()

    if(responseOneDay.ok){
      setResults(jsonOneDay)
    }

    const responseForcast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&exclude={hourly}&appid=f20a26820745e14758cd4168868cbed1`)
    const jsonForcast = await responseForcast.json();

    if(responseForcast.ok){
      setIsLoadCardShowing(false)
      setError(null)
      setIsLoading(false);
      setIsForcastingLoading(false)
      setForcastResults(jsonForcast.list)
    }   
  }

  return (
    <div className='row'>
      <div className="col-12">
            {/* search form */}
            <form className='' onSubmit={handleSubmit}>
              <h1 className='text-xl'>Search for wheather Results</h1>
              <div className="form-group">
                <label>Longitude</label>
                <input 
                  type="text" 
                  className='form-control'
                  onChange={(e) => {setLogitude(e.target.value)}}
                  value={longitude}
                />
              </div>
              <div className="form-group">
                <label>Latitide</label>
                <input 
                  type="text" 
                  className='form-control'
                  onChange={(e) => {setLatitude(e.target.value)}}
                  value={latitude}
                />
              </div>
              <div className="bottom flex justify-between">
                <button className='btn btn-outline-secondary' type='submit'>Search</button>
                <small className='text-red-600'>{error}</small>
              </div>
            </form>
      </div>

      <div className="col-12 md:mt-5">
          {/* search results */}
          {isforcastingLoading ? <LoadingCard/> : (!isLoadCardShowing ? <SearchResult results={results} forcastResults={forcastResults}/> : <LoadingCard/>)}
      </div>
    </div>
  )
}

export default SearchComponent