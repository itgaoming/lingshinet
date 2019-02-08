import goods1 from '../../page/index';
import {connect} from 'react-redux';

const mapStateToProps=function(state){
    return {
        goods1:state.goods1
    }
}
const mapDispatchToProps=function(dispatch){
    return {
        getGoods(){
            console.log("获取商品")
            dispatch({type:"getGoods"});
            
        },
        updateNum(option,ind){
            console.log("更改商品数量",option,ind)
            dispatch({type:"updateNum",option:option,ind:ind})
        },
        del(ind){
            console.log("删除商品",ind)
            dispatch({type:"del",ind})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(goods1);