import React from 'react';

// SparklinesReferenceLine returns average or mean value. 
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

import _ from 'lodash';



function average (data) {

    return _.round(_.sum(data)/data.length);
}


export default (props) => {

    return (

         /* Just remind: when we move data in an object => "this.props.data"  */
        /* When we receive data from the other component, we need to use "props.data" */

        <div>
            
             <Sparklines height={120} width={180} data = {props.data}>

                        <SparklinesLine color = { props.color } />
                        <SparklinesReferenceLine type = "avg" />

             </Sparklines>
             <div>{ average(props.data) } {props.units} </div>

        </div>

    );

}