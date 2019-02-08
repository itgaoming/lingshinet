import React,{Component} from 'react';
import "./index.css";

class login extends Component{
    constructor(){
        super();
        this.state={
            user:{
                name:"",
                pwd:""
            }
        }
    }
    submit(e){
        e.preventDefault();
        if(this.state.user.name===""||this.state.user.pwd===""){
            alert("用户名或密码不能为空");
        }else{
            this.$axios({
                method:"post",
                mode:"cors",
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                url:"http://localhost/lingshi/server/login.php",
                data:this.state.user
            }).then((res)=>{
                if(res.data.status===1){
                    alert("登录成功");
                    sessionStorage.setItem("userinfo",JSON.stringify(res.data.data));
                    this.props.history.push("/user");
                }else{
                    alert(res.data.msg);
                }
            })
        }
    }
    setName(e){
        let name =e.target.value;
        console.log(name);
        this.setState(state=>{
            state.user.name=name;
            return state;
        })
    }
    setPwd(e){
        let pwd=e.target.value;
        this.setState(state=>{
            state.user.pwd=pwd;
            return state;
        })
    }
    render(){
        return (
            <div className="login">
                <form onSubmit={(e)=>this.submit(e)}>
                    <p>
                        <i className="fa fa-mobile"></i>
                        <input type="text" name="uname" placeholder="邮箱/手机号" onChange={(event)=>this.setName(event)} />
                    </p>
                    <p>
                        <i className="fa fa-lock"></i>
                        <input type="password" name="upwd" placeholder="密码" onChange={(e)=>this.setPwd(e)} />
                    </p>
                    <div className="Btn">
                        <button >立即登录</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default login;