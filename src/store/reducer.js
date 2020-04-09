//第三方插件redux-immutable
import {combineReducers} from 'redux-immutable';  
//合并多个小的reducer
import {reducer as headerReducer} from '../common/header/store';
//topic
import { reducer as homeReducer } from '../pages/home/store';

const reducer= combineReducers({
    header:headerReducer,
    home:homeReducer
});

export default reducer;
