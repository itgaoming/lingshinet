import {createStore} from 'redux';


const stateDefault={
    goods1:[]
}
const reducers=function(state=stateDefault,action){
    switch(action.type){
        case "getGoods":
            
            return state;
        case "updateNum":
            if(action.option==="-"){
                if (state.carts[action.ind].num>1){
                    state.carts[action.ind].num--;
                }else{
                    state.carts[action.ind].num=1;
                }
            }else{
                state.carts[action.ind].num++;
            }
            localStorage.setItem("carts", JSON.stringify(state.carts));
            return JSON.parse(JSON.stringify(state));
        case "del":
            state.carts.splice(action.ind,1);
            localStorage.setItem("carts", JSON.stringify(state.carts));
            return JSON.parse(JSON.stringify(state));
        default:
            return state;
    }
}

const store=createStore(reducers);
export default store;