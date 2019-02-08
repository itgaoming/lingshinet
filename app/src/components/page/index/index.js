import React,{Component} from 'react';

import "./index.css";
import Header from './header';
import Footer from './../../common/footer';
import Category from './category';
import Goods1 from './goods1';
import Goods2 from './goods2';
import Goods3 from './goods3';
import Goods4 from './goods4';
import Goods5 from './goods5';
import Goods6 from './goods6';
class index extends Component{
    constructor(){
        super();
        this.state={
            goods:[],
            moregoods:[],
            isLoad:false,
            bln:true,
            isLoadMore:true,
            moves:false
        }
    }
    loadMore(length,e){
        if(e!==undefined){
            console.log("触发了点击事件");
        }
        else{
            console.log("触发了touchend事件");
        }
        this.setState({
            bln:false
        })
        setTimeout(()=>{
            this.setState(state=>{
                let newGoods=state.goods.goods6.slice(length,length+6);
                newGoods.forEach(ele=>{
                    state.moregoods.push(ele);
                })
                state.bln=true;
                return state;
            })
        },1000)
        
    }
    touchEnd=function(){
        this.setState({
            isLoadMore:true,
            moves:false
        })
        console.log("ccc");
        this.loadMore(this.state.moregoods.length);
        document.querySelector(".main").removeEventListener("touchend",this.touchEnd,false);
        document.querySelector(".main").removeEventListener("touchMove",this.touchMove,false);
        
    }.bind(this)
    touchMove=function(){
        console.log("松开加载更多");
        this.setState({
            isLoadMore:false,
            bln:false,
            moves:true
        })
        document.querySelector(".main").addEventListener("touchend",this.touchEnd,false);
        
    }.bind(this)
    scroll(){
        var outside=document.querySelector(".main");
        var inside=document.querySelector(".inside")
        var y=outside.scrollTop;
        if(outside.offsetHeight+y===inside.offsetHeight){
            outside.addEventListener("touchmove",this.touchMove,false)
            
        }
        else{
            outside.removeEventListener("touchmove",this.touchMove,false)
            outside.removeEventListener("touchend",this.touchEnd,false);
        }
        this.lazyload();
    }
    lazyload(){
        //console.log("触发懒加载");
        var oH=document.querySelector(".main").offsetHeight;
        var scrollY=document.querySelector(".main").scrollTop;
        var oImg=document.querySelectorAll("img");
        oImg.forEach(ele=>{
            //console.log(ele.getAttribute("data-src"));
            var stance=ele.offsetTop;

            if(stance<=scrollY+oH-ele.offsetHeight/4){
                ele.setAttribute("src",ele.getAttribute("data-src"));
            }
        })
    }
    render(){
        if(this.state.isLoad){
            var lis=this.state.moregoods.map((val,ind)=>{
                return (
                    <li key={ind}>
                        <img data-src={val.g_img} alt=""/>
                        <p>{val.g_name}</p>
                        <span>{val.g_price2}<b>{val.g_price1}</b></span>
                    </li>
                )
            })
            setTimeout(()=>{
                this.lazyload();
            })
        }
        
        return (            
                <div className="index">
                    <Header></Header>
                    <div className="main" onScroll={()=>this.scroll()}>
                        <div className="inside">
                            <Category></Category>
                            {this.state.isLoad && <div className='goods'>
                                <Goods1 goods={this.state.goods.goods1}></Goods1>
                                <Goods2 goods={this.state.goods.goods2}></Goods2>
                                <Goods3 goods={this.state.goods.goods3}></Goods3>
                                <Goods4 goods={this.state.goods.goods4}></Goods4>
                                <Goods5 goods={this.state.goods.goods5}></Goods5>
                                <Goods6></Goods6>
                            </div>}
                            {this.state.isLoad &&
                            <div className="moregoods">
                                <h3>猜你喜欢</h3>
                                <ul>{lis}</ul>
                                {this.state.bln?
                                <div className="loadmore" onClick={(event)=>this.loadMore(this.state.moregoods.length,event)}>点击加载更多</div>:
                                (this.state.isLoadMore?
                                <div className="loadmore">
                                    <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                                    <span>加载中</span>
                                </div>:
                                <div className="loadmore">
                                    松开立即加载
                                </div>)
                                
                            }
                            </div>}
                            
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
        )
    }
    componentDidMount(){
        fetch("http://localhost/lingshi/server/getGoods.php",{
            mode:"cors"
        }).then(res=>res.json()).then(res=>{
            this.setState(state=>{
                state.goods.goods1=res.filter(ele=>ele.g_type==="手机专享");
                state.goods.goods2=res.filter(ele=>ele.g_type==="秒杀专场");
                state.goods.goods3=res.filter(ele=>ele.g_type==="限时促销");
                state.goods.goods4=res.filter(ele=>ele.g_type==="多买多折");
                state.goods.goods5=res.filter(ele=>ele.g_type==="组合优惠");
                state.goods.goods6=res;
                state.isLoad=true;
                return state;
            })
        })
    }
    
}
export default index;