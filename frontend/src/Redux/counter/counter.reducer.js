// import { useHistory } from 'react-router-dom';
import { actionType } from './counter.action'

const initialValue = {
  userList:[],
  reg_res: '',
  login_res:''
  
};

const Reducer = (state = initialValue, action) => {
  switch (action.type) {

    case actionType.SUBMIT_FORM_DATA:
      return {
        ...state,
        reg_res: action.payload, 
         
      };

    case actionType.LOGIN_FORM_DATA:
      return {
        ...state,
        login_res: action.payload, 
         
      };
      

    case actionType.GET_FORM_DATA:
      console.log("data", action.payload)
      return {
        ...state,
        userList: action.payload,

      }

      






      
    // case actionType.UPDATE_FORM_DATA:
    //     const newChange=[...state.userList];
    //     newChange.map((data,index)=>{
    //         if(data.email===action.payload.email){
    //             newChange[index]={...action.payload};
    //         }
    //     });
    //     return {
    //         ...state,
    //         userList:[newChange],
    //     }

    //     case actionType.DELETE_FORM_DATA:
    //   let allUser = [...state.userList];
    //   allUser.splice(action.payload, 1);
    //   return {
    //     ...state,
    //     userList: [...allUser],
    //   };
    default: return state

  }
}


export default Reducer