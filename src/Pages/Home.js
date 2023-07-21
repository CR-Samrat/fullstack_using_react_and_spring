import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const[user,setUser] = useState([])
  useEffect(() => {
    loadUsers()
  },[])

  const loadUsers = async () => {
    const showUsers = await axios.get("http://localhost:8080/user/show")
    setUser(showUsers.data)
  }

  const deleteUser = async (e,id) => {
    let confirm = window.confirm("Are you sure you want to delete?")
    if(confirm) {
      await axios.delete(`http://localhost:8080/user/delete/${id}`)
      loadUsers()
    }
  }

    return (
    <div>
        <table className="table table-striped mt-3 container shadow border">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Username</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((each_user, index) => {
            return(
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{each_user.username}</td>
                <td>{each_user.firstName}</td>
                <td>{each_user.lastName}</td>
                <td>{each_user.email}</td>
                <td>
                  <Link to={`/view/${each_user.id}`} className='btn btn-primary mx-2'>View</Link>
                  <Link to={`/edit/${each_user.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                  <button onClick={(e)=>deleteUser(e,each_user.id)} className='btn btn-danger mx-2'>Delete</button>
                </td>
            </tr>
            )
        })
    }
  </tbody>
</table>
    </div>
  )
}

export default Home