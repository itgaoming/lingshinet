import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';

class goods4 extends Component{
    render(){
        var lis=this.props.goods.map((val,ind)=>{
            return (
                <li key={ind}>
                    <img data-src={val.g_img} alt=""/>
                    <div>
                        <p>{val.g_name}</p>
                        <span>￥{val.g_price2}</span>
                    </div>
                </li>
            )
        })
        return (
            <div className="goods4">
                <Goodstitle titName={"多买多折"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    <ul>{lis}</ul>
                </div>
            </div>
        )
    }
}


export default goods4;