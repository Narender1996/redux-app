import Axios from 'axios';
import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar'
import { connect } from "react-redux"
import {loginFormData} from '../Redux/counter/counter.action'


const mapDispatchToProps = Dispatch => {
  return {
    Loginuser: (data) => Dispatch(loginFormData(data)),
    
  }
}

function Login(props){
  let history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-id'))
    {
      history.push('/home')
    }
  },[])

const [state,setState]=React.useState({
    email:"",
    password1:""
})
function inputchange(event){
      let nam=event.target.name;
      let val=event.target.value;

      setState({ ...state, [nam]: val });
}
  let onSubmit =async (event)=>{
    event.preventDefault();
    const {email,password1}=state;
    console.log(state)
  props.Loginuser({email,password1})
  
  console.log("hello")

  
  }
   return (
     <div>
     <Navbar />
           <form onSubmit={onSubmit}>
         email:
         <input type="email" name="email" value={state.email} onChange={inputchange}></input><br></br>
         Password:
         <input type="password" name="password1" value={state.password1} onChange={inputchange}></input><br></br>

         <input type="submit" name="login" value="Submit" /><br></br>
       </form>
     </div>
   )
}

export default connect(null, mapDispatchToProps)(Login)
