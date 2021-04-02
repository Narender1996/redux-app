import React, { useEffect } from 'react'
// import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import { connect } from "react-redux"
import {submitFormData} from '../Redux/counter/counter.action'

const mapStateToProps = state => {
  return {
    sigupRes: state.User_REDUCER,
  }
}
const mapDispatchToProps = Dispatch => {
  return {
    Adduser: (data) => Dispatch(submitFormData(data))
  }
}
function Signup(props ) {
  let history = useHistory()
  useEffect(() => {
    if (localStorage.getItem('user-id')) {
      history.push('/home')
    }
  }, [])

  const [state, setState] = React.useState({
    Name: "",
    Email: "",
    Address: '',
    Password1: '',
    Password2: ''
  })
  function inputchange(event) {
    //  console.log(event.target)
    let nam = event.target.name;
    let val = event.target.value;
    // let {namr,vale}=event.target;
    setState({ ...state, [nam]: val });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const { Name, Email, Address, Password1, Password2 } = state;
    console.log('enter data', state)
    props.Adduser({ Name, Email, Address, Password1, Password2 } );
    history.push('/login')
  }
  return (
    <div>
      <Navbar />
      {console.log(state)}
      <h1>Signup Form</h1>
      <form onSubmit={onSubmit}>
      <h1> welcome {props.sigupRes.reg_res}</h1>
            Name:
            <input type="text" name="Name" value={state.Name} onChange={inputchange} required={true}></input><br></br>
            Email:
            <input type="text" name="Email" value={state.Email} onChange={inputchange} required={true}></input><br></br>
            Address:
            <input type="text" name="Address" value={state.Adress} onChange={inputchange} required={true}></input><br></br>
            Password:
            <input type="text" name="Password1" value={state.Password1} onChange={inputchange} required={true}></input><br></br>
            Conform-password:
            <input type="text" name="Password2" value={state.Password2} onChange={inputchange} required={true}></input><br></br>

        <input type="submit" name="signup" value="Submit" /><br></br>

      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
