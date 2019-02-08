import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';
import {Link} from 'react-router-dom';
class goods1 extends Component{
    constructor(){
        super();
        this.state={
            goods:{}
        }
    }
    render(){
        var goods=this.props.goods;
        return (
            <div className="goods1">
                <Goodstitle titName={"手机专享价"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    <div className="left">
                        
                        <Link to="/">
                            <img data-src={goods[0].g_img} alt=""></img>
                            <p>
                                {goods[0].g_name}
                                
                            </p> 
                            <span>￥{goods[0].g_price2}</span>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="right_top">
                            <Link to="/">
                                <img data-src={goods[1].g_img} alt=""></img>
                                <div>
                                    <p>
                                        {goods[1].g_name}
                                        
                                    </p> 
                                    <span>￥{goods[1].g_price2}</span>  
                                </div>
                            </Link>
                        </div>
                        <ul>
                            <li>
                            <Link to="/">
                                <img data-src={goods[2].g_img} alt=""></img>
                                
                                    <p>
                                        {goods[2].g_name}
                                        
                                    </p> 
                                    <span>￥{goods[2].g_price2}</span>  
                                
                            </Link>
                            </li>
                            <li>
                            <Link to="/">
                                <img data-src={goods[3].g_img} alt=""></img>
                                    <p>
                                        {goods[3].g_name}
                                    </p> 
                                    <span>￥{goods[3].g_price2}</span>  
                                
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        
    }
}


export default goods1;