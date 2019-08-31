
import React from 'react';

class Form extends React.Component{  

    render(){
        return (
        // Creating the form so that the user can enter the city and country of their choice and parsing the props as soon as they click on the "Get Weather" button
        <form onSubmit={this.props.loadWeather}>
            <input type="text" name="city" placeholder="Enter City..." />&nbsp;
            <input type="text" name="country" placeholder="Enter Country..." />&nbsp;
            <button>Get Weather</button><br/><br/>
        </form>
        )
    }    
}

export default Form;