import React from 'react';
import { WKey } from './wkey';

import axios from 'axios';

/**
 * [Middleware]
 * Middleware is a "function" taking in an action
 * and depending on action's "type" and "payload"
 * or any other number's factors.
 * 
 *  * Middleware can choose to let the action pass through
 * it can manipulate action 
 * it can console.log it "before" the action reaches "reducer"
 * 
 * "it is kind of gatekeeper" before reducer!!!
 * 
 * Example:
 *  1. Action creator check up the type.
 *  2. Action creator finds middleware like axios and its promise.
 *  3. While action creator is having the middlware's status, the action stops.
 *      In the meantime,
 *      case 1) 
 *          (1) Ajax propmise requestS data to weather api server
 *          (2) Without any error to access the server and get the data
 *              it returns "Resolved status" which means middleware get the data form the server
 *          (3) Then, it puts the data into action property, for instance "payload".
 *          (4) It sends the status and data to "reducers"
 *      
 *      case 2)
 *          (1) Ajax propmise requestS data to weather api server
 *          (2) With any error to access the server and get the data
 *              it returns "Error status" which means middleware was not able to get the data form the server
 *          (3) It sends the status to "reducers"
 * 
 * Consequently, the middlware controls and manipulates the action.
 * In this case, Reducers is able to minimize the controls such as "switch ....case".
 * 
 *      
 * 
 * [redux -  promise]
 * 1. setup
 *      
 *   npm install --save redux-promise
 * 
 * 2. Working flow
 */


 /**
  * [Ajax Request]
  * We will use 'axios' instead of JQuery
  * 
  * setup : npm install --save axios
  * 
  * -- Axios returns "Promise"
  *   . Returned promise:
  *     - Status : "error" or "resolved" 
  *     - PromiseValue: api data as on "Object"
  *     
  *     ****** The great function of promise is that it is able to contain api data automatically.
  * 
  * 
  * 
  */

// const API_KEY = WKey;

// to prevent to make a type or mistake.
// It is a convention to be consistent in both locations.

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Ajax Request
// Remember, middleware is an function.
// It is an action creator to request weather API.
// Basic stuff is jQuery URL request.

// We need to put city and country code into URL above.
// Therefore, input their parameters here.
export function fetchWeather(city) {

    // only for the f US
    const url = `${ROOT_URL}&q=${city},us`;

    // need variable to make a reuse of it.
    // 'axios' just returns 'promise'. That is, it is a kind of promise.
    // This 'promise' contains the api data.
    const request = axios.get(url);

    console.log(request, '...request');

    return {

        type: FETCH_WEATHER,
        payload: request

    };

}

