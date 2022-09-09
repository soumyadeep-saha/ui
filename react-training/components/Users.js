import React, {Component} from 'react';
import User from './User';

export default class Users extends Component{
    render(){
        return(
            <div>
                {this.props.udatas.map((data) => <User key= {data} udata={data}/>)}
                <button disabled={!this.props.datalen} onClick={this.props.delAlUsrs}>DeleteAll</button>
            </div>
        )
    }
}
