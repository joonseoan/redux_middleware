import React, { Component } from 'react';

import { connect } from 'react-redux';



/**
 * React sparklines
 *  
 * npm i --save react-sparklines@1.6.0
 * 
 * It is for rendering gragh.
 */

 // Sparklines: parent component
 // SparklinesLine: a child element to have additional configuration.
 
 // 1) 
 // It goes to chart.js in components folder to make a single component of the colums.
 // import { Sparklines, SparklinesLine} from 'react-sparklines'

// 2)
// importing chart.js component
import Chart from '../components/chart.js';

class WeatherList extends Component {
        
    renderWeather (cityData) {

        // cityData is all data in the array
        // like map((cityData) => {})
        console.log (cityData, '....cityDATA');

        const name = cityData.city.name;
        
        /* // 1)
        const temps = cityData.list.map( (weather) => {

            return weather.main.temp;

        }); 
        */

      // ES6
       const temps = cityData.list.map(weather => weather.main.temp);

        console.log(temps, '...temp');

       const pressures = cityData.list.map(weather => weather.main.pressure);
       const humidities = cityData.list.map(weather => weather.main.humidity);
       

        return (

            <tr key = { name } >
                <td>
                    { name }
                </td>
                <td>
                    {/* It goes to chart.js to make a single component of this colums
                    <Sparklines height= { 120 } width = { 180 }
                        data = { temps }>

                        <SparklinesLine color = 'red' />
                    
                    </Sparklines>
                    */}


                    {/*by importing the Chart component */}
                    <Chart data= { temps } color = 'orange' units = 'K' />
                </td>

                <td><Chart data= { pressures } color = 'green' units = 'hPa'/> </td>
                <td><Chart data = { humidities } color = 'black' units = '%'/></td>
            </tr>

        );


    }
    
    /* // [Option 2]
    renderWeather() {

        return (this.props.weather.map((cityData) => {

            return (
            
            <tr>
                <td>
                     { cityData.city.name } 
                </td>
            </tr>);

        }));
    }
    */
    

    render() {

        console.log(this.props.weather);

        return (

            <div> 

                <table className= "table table-hover">
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>
                            <th>
                                Temperature (K)
                            </th>
                            <th>
                                Pressure (hPa)
                            </th>
                            <th>
                                Humidity (%)
                            </th>
                        </tr>
                    </thead>
                        
                    <tbody> 
                        
                    
                        {/* console.log(this.props.weather, "this.props.weather")*/}
                        
                        { /* <tbody>
                        
                        {console.log(this.props.weather, "this.props.weather")}
                        
                        { this.props.weather.map( 
                           
                           (cityData) => {
                            <tr>
                                <td>
        
                                         cityData.city.name 
                                </td>  
                            </tr>  
                            }
                        ) }
                    </tbody> 
                        But it is not working because HTML tag does not render.
                        It is why we need to split it over and then define the separate function above.
                    */ }

                        {/* [Option 2]*/}
                        {/*The followings are just making the function run and grabbing the object
                           It does not get the returned value*/}
                        {/*console.log(this.renderWeather) */}
                        {/* this.renderWeather  */}

                        {/* The followings are making the function furn and grabbing returned value */}
                        {/* console.log(this.renderWeather()) */}
                        {/* this.renderWeather()  */}
                           
                        { this.props.weather.map(this.renderWeather) }

                    </tbody>
                </table>


            </div>

        );


    }

}

/*
function mapDispatchToProps (state) {
    
    return ({ weather : state.weather });

} 
*/


// ES6 Syntax
function mapStateToProps ({ weather }) {
    
    // const weather = state.weather


    // { weather : weather }
    return { weather }

} 

export default connect (mapStateToProps)(WeatherList);


/**
 * 
 * 
 * 
 * 
 */
   

