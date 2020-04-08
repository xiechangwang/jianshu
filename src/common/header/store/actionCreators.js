import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const listAction=(data)=>({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),   //注意数据类型统一为immutable类型的数据
    totalPage:Math.ceil(data.length/10)
})

export const seachFocus=()=>({
    type:actionTypes.SEARCH_FOCUS
});

export const seachBlur=()=>({
    type:actionTypes.SEARCH_BLUR
});

export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER
})

export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE
})

export const chengePage=(page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
})

export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/list.json').then((res)=>{
            const data=res.data;
            dispatch(listAction(data.data));
        }).catch((err)=>{
            console.log('err');
        })
    }
}