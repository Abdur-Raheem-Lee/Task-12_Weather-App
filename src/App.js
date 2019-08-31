import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const api = '413f80bc02fee1a98814729da76b69e4'

class App extends React.Component{

  // Setting default state
  state = {
    temperature: undefined,
    maxTemp: undefined,
    minTemp: undefined,
    wind: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Method for to call API and using async/await which makes it less complicated to call the api   
  getWeather = async(event) => {

    event.preventDefault();
    // Making the API dynamic by getting the country and city that the user enters
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    // Parsing the user's country and city and getting the weather for that specific city
    const callApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=metric`);
    const response = await callApi.json();

    // Assigning values to state on condition

    try {      
        // If City and country are entered then the information will be displayed
        this.setState({
          temperature: response.main.temp,
          maxTemp: response.main.temp_max,
          minTemp: response.main.temp_min,
          wind: response.wind.speed,
          city: response.name,
          country: response.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: undefined
        })
      
    } catch (error) {
      // If only one or no information is entered then the error is displayed
      this.setState({
        temperature: undefined,
        maxTemp: undefined,
        minTemp: undefined,
        wind: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "ERROR 404 NOT FOUND"
      })
    }
  }

  render() {
    return (
      <div>
        {/* Displaying the information from the Components */}
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    maxTemp={this.state.maxTemp}
                    minTemp={this.state.minTemp}
                    wind={this.state.wind}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  } 
}

export default App;
