import React,{Component} from 'react';
import "./index.css";
import Footer from '../../common/footer';
import {NavLink} from 'react-router-dom';
class User extends Component{
    constructor(){
        super();
        this.state={
            link:[
                {name:"我的订单",icon:"",url:""},
                {name:"收货地址",icon:"",url:""},
                {name:"代金券",icon:"",url:""},
                {name:"我的收藏",icon:"",url:""},
                {name:"浏览历史",icon:"",url:""},
                {name:"我的购物车",icon:"",url:""},
                {name:"我的信息",icon:"",url:""},
                {name:"反馈意见",icon:"",url:""},
            ]
        };
    }
    exit(){
        this.props.history.push("/mine");
        sessionStorage.removeItem("userinfo");
    }
    render(){
        let user=JSON.parse(sessionStorage.getItem("userinfo")||'{}');
        let lis=this.state.link.map((val,ind)=>{
            return (
                <li key={ind}>
                    <NavLink to={val.url} exact>
                        <p>
                            <span className="iconLink"></span>
                            {val.name}
                        </p>
                        <i className="fa fa-chevron-right"></i>
                    </NavLink>
                </li>
            )
        })
        return (
            <div className="user">
                <div className="topside">
                    <div className="head">
                        <img src="images/user-head.png" alt="" />
                        <div className="info">
                            {user.u_name}
                            <span>普通会员</span>
                        </div>
                    </div>
                    <div className="msg">
                        <p>我的余额：<span>￥0.00</span></p>
                        <p>我的积分：<span>510</span></p>
                    </div>
                    <ul className="user_link">
                        {lis}
                    </ul>
                    <button className="exit" onClick={()=>this.exit()}>退出</button>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default User;