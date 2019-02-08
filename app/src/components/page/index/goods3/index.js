import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';

class goods1 extends Component{
    render(){
        var oLis=this.props.goods.map((val,ind)=>{
            return (
                <li key={ind}>
                    <img data-src={val.g_img} alt=""/>
                    <p>{val.g_name}</p>
                    <span>￥{val.g_price2}</span>
                </li>
            )
        })
        return (
            <div className="goods3">
                <Goodstitle titName={"限时专享"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    <ul>
                        {oLis}
                    </ul>
                </div>
            </div>
        )
    }
}


export default goods1;