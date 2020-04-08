import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

//immutable设置值需要用set('变量名','数据')方法
export default (state=defaultState,action)=>{
    // if(action.type===actionTypes.SEARCH_FOCUS){
    //     return state.set('focused',true)
    //     // return{
    //     //     focused:true
    //     // }
    // }
    // if(action.type===actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false)
    //     // return{
    //     //     focused:false
    //     // }
    // }
    // if(action.type===actionTypes.CHANGE_LIST){
    //     return state.set('list',action.data);
    // }
    // return state
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:   
            return state.merge({    //更新多个数据
                'list':action.data,
                'totalPage':action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);    
        default:
             return state;             
    }

}