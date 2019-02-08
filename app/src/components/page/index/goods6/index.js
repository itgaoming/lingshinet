import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';

class goods6 extends Component{
    constructor(){
        super();
        this.state={
            nations:["欧美","越南","韩国","菲律宾","泰国","马来西亚","日本","印尼"]
        }
    }
    render(){
        var lis=this.state.nations.map((val,ind)=>{
            return (
                <li key={ind}>
                    <span></span>
                    <p>{val}</p>
                </li>
            )
        })
        return (
            <div className="goods6">
                <Goodstitle titName={"进口零食"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    <ul className="area">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="nation">{lis}</ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //var oSpan=document.querySelectorAll(".nation span");
        
    }
}


export default goods6;