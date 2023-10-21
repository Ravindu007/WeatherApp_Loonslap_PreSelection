import React from 'react'

const ForcastCard = ({item, customclass}) => {

  const formatDate = (dateString) => {
    const options = {
      month: 'short', // Display the month as a three-letter abbreviation
      day: 'numeric', // Display the day of the month
      weekday: 'long', // Display the day of the week as the full name
    };
  
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className={`ForcastCard flex flex-col items-center bg-slate-300 mx-1 rounded-md ${customclass}`}>
      <p>{formatDate(item.dt_txt)}</p>
      <p>{item.weather[0].description}</p>
      <img width={50} height={50} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="" />
      <p>{item.main.temp}</p>
    </div>
  )
}

export default ForcastCard