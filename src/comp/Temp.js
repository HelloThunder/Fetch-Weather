import React ,{useEffect, useState} from 'react';
// import ReactDOM from "react-dom";
// import App from "./App";
// import useState;
import "./style.css";

const Temp = ()=>{

const[city,setCity] =useState(null);
const[search,setSearch] =useState("Mumbai");
var a = search.toUpperCase();

useEffect(()=>{
    const fetchApi =async()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=37655ef9ce2bd7bdd2d4a7b02d87d137`;
        const response =await fetch(url);
        
        const resJson =await response.json();
        console.log(resJson);
        setCity(resJson.main);
        // console.log(resJson);
    };
    fetchApi();
 },[search] )
    return( 
        <> <div className="top"><h1><strong>Current Temprature</strong></h1></div>
        <div className="box">
            <div className="inputData" >
            {/* <h1>Nice</h1> */}
            
            <input type="search" value={search} className="inputField" onChange={(event) =>{
            setSearch(event.target.value);
            }}/>
            </div>

   {
       !city ?(<p className="errormsg">No Data Found</p>):(
       <div> 
           <div className="info">
           <h2 className="location">
           <i className="fa fa-street-view" aria-hidden="true"></i>
           {a}
           </h2>
           <h1 className="temp">
           {city.temp}°Cel
           </h1>
           {/* <h3>{city.weather[0].main}</h3> */}
           <h4 className="tempmin_max">Min:{city.temp_min}°Cel | Max :{ city.temp_max}°Cel</h4>
           </div>
   
           {/* <div className="wave-one"></div>
           <div className="wave-two"></div>
           <div className="wave-three"></div> */}
           </div>
       )
    }
       </div> 
     <div className="light" onClick={()=>{
        var element = document.body;
        element.classList.toggle("dark-mode");
        // var a = document.getElementsByClassName("light");
        // a.classList.toggle("light-mode");
            
     }}><i class="fas fa-moon"></i></div>
        </>
    )
}
export default Temp;