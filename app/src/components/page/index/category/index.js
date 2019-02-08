import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

class category extends Component{
    render(){
        return (
            <div className="category">
                <ul>
                    <li>
                        <Link to="/">
                            <i></i>
                            <span>我的订单</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i></i>
                            <span>代金券</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i></i>
                            <span>批发</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i></i>
                            <span>浏览历史</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default category;