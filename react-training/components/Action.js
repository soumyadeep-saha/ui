import React, {Component} from 'react';

export default class Action extends Component{
    render(){
        return(
            <div>
                <button disabled={!this.props.datalen}>Show</button>
            </div>
        )
    }
}
