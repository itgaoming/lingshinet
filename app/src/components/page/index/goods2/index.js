import React,{Component} from 'react';
import "./index.css";
import Goodstitle from './../goodstitle';
import {Link} from 'react-router-dom';
class goods2 extends Component{
    constructor(){
        super();
        this.state={
            time:24*60*60,
            th:"",
            tm:"",
            ts:"",
        }
    }
    getTime(time){
        var seconds=time;
        if(time>0){
            this.timer=setInterval(()=>{
                seconds=seconds-1;
                var th=parseInt(seconds/60/60)%24;
                th=th<10?"0"+th:th;
                var tm=parseInt(seconds/60)%60;
                tm=tm<10?"0"+tm:tm;
                var ts=seconds%60;
                ts=ts<10?"0"+ts:ts;
                this.setState({
                    time:seconds,
                    th,
                    tm,
                    ts
                })
            },1000)
        }else{
            clearInterval(this.timer);
        }
        
    }
    render(){
        var oLis=this.props.goods.map((val,ind)=>{
            return (
                <li key={ind}>
                    <Link to="/">
                        <h5>￥{val.g_price2}</h5>
                        <p>{val.g_name}</p>
                        <div className="time">
                            <span>{this.state.th}</span>
                            :
                            <span>{this.state.tm}</span>
                            :
                            <span>{this.state.ts}</span>
                        </div>
                        <img data-src={val.g_img} alt=""/>
                    </Link>
                </li>
            )
        })
        return (
            <div className="goods2">
                <Goodstitle titName={"秒杀专场"} titUrl={"/"}></Goodstitle>
                <div className="content">
                    {oLis}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getTime(this.state.time);
    }
}


export default goods2;