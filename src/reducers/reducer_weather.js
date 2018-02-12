import { FETCH_WEATHER } from "../actions";

/**
 * Redux Promise to handle in FETCH_WEATHER action!!!
 * 
 * Reducer here receives action data from promise's object of the action creator.
 * Conventionally, payload contains the object with api data.
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
 */

// As we want to get multiple cities, we should use array.
 export default function (state = [], action) {

    console.log(action, '...action received');
    
    switch (action.type) {
    case FETCH_WEATHER:
    return [ action.payload.data ];


    }
    
    return state;

 }