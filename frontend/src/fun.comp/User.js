import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
// import { connect } from 'react-redux'

// const mapDispatchToProps = Dispatch => {
//     return {
//       Edituser: (data) => Dispatch(EditFormData(data)),
      
//     }
// const mapDispatchToProps = Dispatch => {
//     return {
//       Deleteuser: (data) => Dispatch(DeleteFormData(data)),
      
//     }

function User(props) {
    const [users, setUser] = useState([])
  useEffect(() => {
        loadUser();
        return () => {
            console.log("unmounting")
        }
    }, [])

    const loadUser = async () => {
        await axios.get("http://localhost:3001/formdata/getData")
            .then((res) => {
                console.log('home data', res)
                const allData = res.data.formdata
                setUser(allData)
            })
            .catch((err) => { console.log(err) })
    }
    console.log(users)

    const renderTable = () => {
        return (
            // console.log("hello",users)
            users.map((user => {
                return (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {/* <button onClick={()=>()=>EditFormData}>edit</button>
                        <button onClick={()=>DeleteFormData}>delete</button> */}
                    </tr>
                )
            }))
        )
    }
    return (
        <div >
            <Navbar />
            {/* <button onClick={renderTable}>click</button>  */}

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

export default User