import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { getData } from '../Redux/counter/counter.action'
// import { useHistory } from 'react-router-dom'


const mapStateToProps = state => {
    console.log(state.User_REDUCER.userList)
    return {
        GETUSERS: state.User_REDUCER.userList,
    }

}
const mapDispatchToProps = Dispatch => {
    return {
        GETDATA: () => Dispatch(getData())
    }
}

// const mapDispatchToProps = Dispatch => {
//     return {
//         DELETEDATA: () => Dispatch(deleteFormData())
//     }
// }

function User(props) {
    let history = useHistory();


    const getdata = () => {
        props.GETDATA();
    }
//   const deleteData=()=>{
//       props.DELETEDATA()

//   }
 
    //table
    const renderTable = () => {

        return props.GETUSERS.map((user) => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* <td><button onClick={deleteData}>delete</button></td> */}     
                      </tr>
            )
        })
    }
    return (
        <div >
            <Navbar />

            <div>
                <button onClick={getdata}>getData</button>


                {/* <button onClick={AddNewUser}>AddNewUser</button> */}
                <button color="black" onClick={() => history.push("/")}> Logout</button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
