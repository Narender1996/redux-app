import { combineReducers } from 'redux';


import Reducer from './counter/counter.reducer';


const rootReducer = combineReducers({

    User_REDUCER:Reducer,

});

export default rootReducer;