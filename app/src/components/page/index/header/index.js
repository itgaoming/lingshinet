import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

class footer extends Component{
    componentDidMount(){
        var oA=document.querySelectorAll(".nav a");
        for(let i=0;i<oA.length;i++){
            oA[i].addEventListener("click",function(){
                for(let j=0;j<oA.length;j++){
                    oA[j].classList.remove("current");
                }
                this.classList.add("current");
            })
        }
    }
    render(){
        return (
            <div className="header">
                <div className="top">
                    中国零食网
                    <i className="fa fa-search"></i>
                </div>
                <div className="nav">
                    <Link to="/" className="current">首页</Link>
                    <Link to="/">批发</Link>
                    <Link to="/">秒杀</Link>
                    <Link to="/">促销</Link>
                    <Link to="/">进口</Link>
                </div>
            </div>
        )
    }
}
export default footer;