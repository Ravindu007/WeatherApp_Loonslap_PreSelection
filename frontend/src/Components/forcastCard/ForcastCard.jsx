import React from 'react'

const ForcastCard = ({item, customclass, parent}) => {

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
    <div className={`ForcastCard flex flex-col items-center h-auto w-40 bg-slate-300 mx-1 rounded-md ${customclass} shadow-md shadow-slate-300`}>
      {parent === "3day" && (
        <p>{formatDate_for3Days(item.dt_txt)}</p>
      )}
      {parent ==="7day" && (
        <p className='text-xs'>{formatDate_for7Days(item.dt_txt)}</p>
      )}
      <p>{item.weather[0].description}</p>
      <img width={50} height={50} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
      <p>{item.main.temp} &#8451;</p>
      <p>{item.main.humidity} %</p>
    </div>
  )
}

export default ForcastCard