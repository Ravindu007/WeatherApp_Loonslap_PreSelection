import React, { useState } from 'react'
import SearchResult from './SearchResult'
import LoadingCard from './LoadingCard'

const SearchComponent = () => {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLogitude] = useState(null)

  //where we save data
  const [results, setResults] = useState(null)

  //waiting till we generate results
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = async(e) => {
    e. preventDefault();
    
    // send API request 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f20a26820745e14758cd4168868cbed1`)
    const json = await response.json()

    if(response.ok){
      setIsLoading(false);
      setResults(json)
      console.log(json);
    }
  }

  return (
    <div>
      {/* search form */}
      <form className='' onSubmit={handleSubmit}>
        <h1>Search for wheather Results</h1>
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
        <button className='btn btn-outline-primary' type='submit'>Search</button>
      </form>

      {/* search results */}
      {isLoading ? <LoadingCard/> : (<SearchResult results={results}/> )}
    </div>
  )
}

export default SearchComponent