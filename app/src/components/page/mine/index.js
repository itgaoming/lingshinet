import React,{Component} from 'react';
import "./index.css";
import {NavLink,Switch,Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
class mine extends Component{
    constructor(){
        super();
        this.state={};
    }
    goBack(){
        console.log("返回上一页");
        this.props.history.goBack();
    }
    render(){
        return (
            <div className="mine">
                <div className="loginHeader">
                    <i className="fa fa-chevron-left" onClick={this.goBack.bind(this)}></i>
                    <NavLink to="/mine" exact>登录</NavLink>
                    <NavLink to="/mine/register">注册</NavLink>
                </div>
                
                <div className="content">
                        <Switch>
                            <Route path="/mine" component={Login} exact />
                            <Route path="/mine/register" component={Register} exact />
                        </Switch>
                </div>
                
            </div>
        )
    }
}
export default mine;