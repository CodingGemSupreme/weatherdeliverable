import React from "react"

const Weather = ({img, conditions, time}) =>{
  return(
      <div>
          <img src={img}/>
          <h4>conditions: {conditions}</h4>
          <h4>time: {time}</h4>
      </div>
  )
};

export default Weather;