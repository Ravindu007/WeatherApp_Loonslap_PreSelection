import React from 'react'

const SearchForecast = ({key,item,parent}) => {
  const formatDate_for3Days = (dateString) => {
    const options = {
      month: 'short', // Display the month as a three-letter abbreviation
      day: 'numeric', // Display the day of the month
      weekday: 'long', // Display the day of the week as the full name
    };
  
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  const formatDate_for7Days = (dateString) => {
    const options = {
      day: 'numeric', // Display the day of the month
      weekday: 'long', // Display the day of the week as the full name
    };
  
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className={`ForcastCard my-2 col-12 flex justify-between items-center bg-slate-300 rounded-md shadow-md shadow-slate-300 md:text-xs ml-0`}>
      {parent === "3day" && (
        <p>{formatDate_for3Days(item.dt_txt)}</p>
      )}
      {parent ==="7day" && (
        <p className='text-xs'>{formatDate_for3Days(item.dt_txt)}</p>
      )}
      <p>{item.weather[0].description}</p>
      <img width={30} height={30} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
      <p>{item.main.temp} &#8451;</p>
      <p>{item.main.humidity} %</p>
    </div>
  )
}

export default SearchForecast