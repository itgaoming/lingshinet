import React,{Component} from 'react';
import "./index.css";

class register extends Component{
    constructor(){
        super();
        this.state={
            regUser:{
                uname:"",
                upwd:""
            },
            isName:false,
            isPwd:false,
            isPwd2:false,
        }
    }
    submit(e){
        e.preventDefault();
        
        if(this.state.isName&&this.state.isPwd&&this.state.isPwd2){
            this.$axios({
                method:"post",
                mode:"cors",
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                url:"http://localhost/lingshi/server/register.php",
                data:this.state.regUser
            }).then((res)=>{
                if(res.data.status===1){
                    alert("注册成功");
                    this.props.history.push("/mine");
                }else{
                    alert("注册失败");
                }
            })
        }else{
            console.log("请检查自己的输入");
        }
    }
    checkName(e){
        let uname=e.target.value;
        let reg=/^1[34578]\d{9}$/.test(uname);
        if(reg){
            console.log("手机号合法");
            this.setState((state)=>{
                state.regUser.uname=uname;
                state.isName=true;
                return state;
            })
        }else{
            console.log("手机号不合法");
            this.setState({
                isName:false
            })
        }
    }
    checkPwd(e){
        let upwd=e.target.value;
        let reg=/^(\w){6,18}$/i.test(upwd);
        if(reg){
            console.log("密码合法");
            this.setState((state)=>{
                state.regUser.upwd=upwd;
                state.isPwd=true;
                return state;
            })
        }else{
            console.log("密码不合法");
            this.setState({
                isPwd:false
            })
        }
    }
    repeatPwd(e){
        if(e.target.value===this.state.regUser.upwd){
            console.log("密码正确");
            this.setState({
                isPwd2:true
            })
        }else{
            console.log("密码错误");
            this.setState({
                isPwd2:false
            })
        }
    }
    render(){
        return (
            <div className="register">
                <form onSubmit={(event)=>this.submit(event)}>
                    <p>
                        <i className="fa fa-mobile"></i>
                        <input type="text" name="uname" placeholder="手机号" onChange={(event)=>this.checkName(event)}/>
                    </p>
                    <p>
                        <i className="fa fa-lock"></i>
                        <input type="password" name="upwd" placeholder="密码（长度不得小于6位）" onChange={(event)=>this.checkPwd(event)}/>
                    </p>
                    <p>
                        <i className="fa fa-check"></i>
                        <input type="password" name="upwd2" placeholder="确认密码" onChange={(event)=>this.repeatPwd(event)} />
                    </p>
                    <div className="Btn">
                        <button >注册</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default register;