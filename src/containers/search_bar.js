import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.state = { term : ''};

        console.log(this, "this constructor")
        this.onInputChange = this.onInputChange.bind(this);
        this.noSubmit = this.noSubmit.bind(this);
    
    }

    // It is from vanila javascript, not from reactjs.
    // "event" is an object of JavaScript

    // 1) "this" is "undefined" whent it is invoked by "this.onInputChange"
    //     Therefore, it is required to bind with "this"
    onInputChange (event) {
        console.log(this, "this function")
        console.log(event, "event");
        console.log(event.target.value, "event target value");

        // "this" is "undefined here"
        this.setState({term : event.target.value});

        

    }

    /*
    onInputChange (term) {
        console.log(this, "this function")
        console.log(event, "event");
        console.log(event.target.value, "event target value");

        this.setState({term});

        

    }*/


    noSubmit (event) {

        // prevent the reload the form.
        event.preventDefault();

        // instead of reloading the page
        // We need to go and fetch weather api data
        
        // It is calling action creator
        // 가지고 와봐 내가 여기에 수자나 value줄께.
        this.props.fetchWeather(this.state.term); // term: city
        
        // The, it makes the input value empty again.
        this.setState({ term: '' });

    }

    render () {

        return (
            <div
             // "search bar input" is inside of a form tag.
             // Therefore, whenever click "submit" button, the form submits HTML tag to the server,
             //     and then, the server reloads the client web to request the next one. This is not a oriented function of Reactjs 
            >
                
                < form onSubmit = { this.noSubmit } className="input-group"
                // We do not want to try to submit by utilizing "onSubmit"'s property.
                // We just want to a single page app.
                >
                    <input
                        placeholder = "Get a five-day weather forcast in your favorite city"
                        className = "form-control"
                        value = { this.state.term }
                        
                        // 1) The way below is invoking "this onInputChange" which is calling SearBar object
                        // It is like the following.
                        // 
                        // function a () {
                        //     return b = "aaa"
                        //  conole.log(this)
                        // }
                        // function a();
                        // window or undefined (IN ES6 : window == undefined "strict mode")
                        onChange = { this.onInputChange }
                        
                        // 2) The way below is invoking "event => this.onInputChange(event.target.value)" which is calling SearBar object
                        // It is like the following.
                        // 
                        // function a () {
                        //     return b = "aaa"
                        //  conole.log(this)
                        // }
                        // var num =  function a()
                        // " a {b} "
                        // onChange = { event => this.onInputChange(event.target.value) }
                    
                    />
                    <span className = "input-group-btn">
                        <button type="submit" className = "btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        );

    }
    
}

function mapDispatchToProps (dispatch) {

    return bindActionCreators ({ fetchWeather }, dispatch);

}
// "null" here is not defined yet. So we should use null.
// When the search bar is empty, the 'term : null' => it is correct scenario.
// We do not need any state here.
export default connect(null, mapDispatchToProps)(SearchBar)