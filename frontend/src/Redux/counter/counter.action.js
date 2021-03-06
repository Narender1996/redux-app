
import Axios from 'axios'

export const actionType = {
    SUBMIT_FORM_DATA: "SUBMIT_FORM_DATA",
    LOGIN_FORM_DATA: "LOGIN_FORM_DATA",
    GET_FORM_DATA: "GET_FORM_DATA",
    UPDATE_FORM_DATA: "UPDATE_FORM_DATA",
    DELETE_FORM_DATA: " DELETE_FORM_DATA",

}
export const submitFormData = (data) => {
    return (dispatch) => {
        return Axios.post('http://localhost:3001/sign_up', data)
            .then(res => {
                if (res.data.status || res.data.msg) {
                    dispatch({
                        type: actionType.SUBMIT_FORM_DATA,
                        payload: res.data.msg
                    })
                }
            })
            .catch(err => { throw (err) });
    };
}
export const loginFormData = (data) => {
    
    console.log("login data", data)
    return (dispatch) => {
        return Axios.post('http://localhost:3001/login', data)
            .then(res => {
                console.log("data", res.data.response)
                if (res.data.status || res.data.msg) {
                    dispatch({
                        type: actionType.LOGIN_FORM_DATA,
                        payload: res.data.msg
                    })
                    console.log('response data ', res)
                    localStorage.setItem("user-id", JSON.stringify(res.data.msg))
                }
            })
            .catch(err => { throw (err) });
    };
}
export const getData = () => {
    
    return (dispatch) => {
        return Axios.get('http://localhost:3001/formdata/getData')
            .then(response => {
                console.log("getdata",response)
               return response.data.formdata 
            })
            .then(formdata=>{
                dispatch({
                    type:actionType.GET_FORM_DATA,
                    payload:formdata
                })
                console.log("reciverd data",formdata.name,formdata.email)
            })
            .catch((err) => { throw(err) })
    }
}









    // export const updateFormData = (data) => {
    //     return {
    //         type: actionType.UPDATE_FORM_DATA,
    //         payload: data
    //     }
    // }

    // export const deleteFormData = (data) => {
    //     return {
    //         type: actionType.DELETE_FORM_DATA,
    //         payload: data
    //     }
    // }