import React, { Component } from 'react'
import './weatherapp1.css';
import Form from "./Form";
const API_key = "2a4578640dc19e3936e9137e8cf20dca";
class WeatherApp2 extends Component {
    constructor(){
        super();
        this.state={
            city : undefined,
            
            celsius : undefined,
            description : "",
            error : false

        };
        
    }

    calTemp(temp){
        let cel = Math.floor(temp -273.15);
        return cel;
    }

    getWeather = async (e) =>{
        e.preventDefault();
       
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if(city&&country){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
        const response =await api_call.json();
        console.log(response);
        this.setState({
            city : `${response.name},${response.sys.country}`,
            
            celsius : this.calTemp(response.main.temp),
            description: response.weather[0].description
        });
    
    }
    else{this.setState({error:true})}
};
    render() {
        return (
            <div className="body">
            <div className='container'>
                <div> <h1>Weather Report</h1></div>
                <Form loadweather={this.getWeather} error ={this.state.error}/>

                      <div className="city"> {this.state.city}</div>
                 <div className="weather">
                 {this.state.celsius?( <div className="temp">{this.state.celsius}&deg;</div>):null}
                <div className="des"> {this.state.description}</div>
                </div>
                
                </div>

            </div>
        )
    }
}

export default WeatherApp2
