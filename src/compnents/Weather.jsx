import React, { useState } from 'react'

function Weather() {
    let[city,setCity] = useState();
    let[wDetails,setDetails] = useState();
    const getData = (e) => {
        e.preventDefault()
        fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
        .then((resp)=>resp.json())
        .then((finalResp)=>{
            console.log(finalResp);
            setDetails(finalResp)
        })
    }
  return (
    <>
    <h2>Weather</h2>
    <form onSubmit={getData}>
        <input type="text" placeholder='Enter Your City Here...' onChange={(e)=>setCity(e.target.value)} name='' id=''/>
    <button type='submit'>Add City...</button>
        
    </form>
    <div className="outerDiv">
        {wDetails !=undefined ? <>
        <h3>{wDetails.name}<span style={{color:'green'}}>{wDetails.sys.country}</span></h3>
        <h3>{wDetails.main.temp}</h3>
        <h3>🌞</h3>
        <h3>{wDetails.wind.speed}</h3>
        </> :<h3>NO DATA HERE</h3>}
    </div>
    </>
  )
}

export default Weather