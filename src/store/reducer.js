//第三方插件redux-immutable
import {combineReducers} from 'redux-immutable';  
//合并多个小的reducer
import {reducer as headerReducer} from '../common/header/store';

const reducer= combineReducers({
    header:headerReducer
});

export default reducer;
