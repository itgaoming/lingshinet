import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";

class footer extends Component{
    constructor(){
        super();
        this.state={
          isLogin:"/mine",
          username:"",
        }
    }
    componentDidMount(){
        let user=JSON.parse(sessionStorage.getItem("userinfo")||'{}');
        if(user.u_name!==undefined){
          this.setState({
            isLogin:"/user",
            username:user.u_name
          })
        }
      }
    render(){
        return (
            <div className="footer">
                <NavLink to="/" exact>
                    <i className="fa fa-home"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/assort" exact>
                    <i className="fa fa-th-large"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to="/cart" exact>
                    <i className="fa fa-cart-plus"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to={this.state.isLogin}>
                    <i className="fa fa-user-circle"></i>
                    <span>用户中心</span>
                </NavLink>
            </div>
        )
    }
}
export default footer;