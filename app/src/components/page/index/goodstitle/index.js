import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

class goodstitle extends Component{
    render(){
        return (
            <div className="goodstitle">
                <h3>{this.props.titName}</h3>
                <Link to={this.props.titUrl}>更多>></Link>
            </div>
        )
    }
}
export default goodstitle;