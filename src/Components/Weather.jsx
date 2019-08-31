import React from 'react';

const Weather = (props) => {    

    return(
        <div className="weather-info">
            {/* Getting the information from the API and displaying it on the webpage for the user to see */}
            {
                props.temperature && 
                <p className="weather_key"><b>Temperature:</b>&nbsp;
                    <span className="weather_value">{props.temperature} °C</span><hr/>
                </p>
            }
            {
                props.maxTemp && 
                <p className="weather_key"><b>Max. Temperature:</b>&nbsp;
                    <span className="weather_value">{props.maxTemp} °C</span><hr/>
                </p>
            }
            {
                props.minTemp && 
                <p className="weather_key"><b>Min. Temperature:</b>&nbsp; 
                    <span className="weather_value">{props.minTemp} °C</span><hr/>
                </p>
            }
            {
                props.humidity && 
                <p className="weather_key"><b>Humidity:</b>&nbsp;
                    <span className="weather_value">{props.humidity} mg/L</span><hr/>
                </p>
            }
            {
                props.wind && 
                <p className="weather_key"><b>Wind Speed:</b>&nbsp; 
                    <span className="weather_value">{props.wind} Km/h</span><hr/>
                </p>
            }
            {
                props.description && 
                <p className="weather_key"><b>Overall Conditions:</b>&nbsp;
                    <span className="weather_value">{props.description}</span><hr/>
                </p>
            }
            {
                props.error && 
                <p className="weather_error"><b>{props.error}</b></p>
            }
        </div>
    )
}

export default Weather;