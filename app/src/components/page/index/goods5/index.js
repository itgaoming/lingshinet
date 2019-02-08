import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';

class goods5 extends Component{
    render(){
        var lis=this.props.goods.map((val,ind)=>{
            return (
                <li key={ind}>
                    <h4>包邮</h4>
                    <p>{val.g_name}</p>
                    <img data-src={val.g_img} alt=""/>
                    <span>￥{val.g_price2}</span>
                </li>
            )
        })
        return (
            <div className="goods5">
                <Goodstitle titName={"组合优惠"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    <ul>{lis}</ul>
                </div>
            </div>
        )
    }
}


export default goods5;