import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const[user, setUser] = useState({});

    const getValue = (e) => {
        setUser({...user,
            [e.target.name] : e.target.value
        })
    }

    const submitUser = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:8080/user/update/${id}`, user)
        navigate("/")
    }

    useEffect(() => {
        loadUser()
    },[])

    const loadUser = async (e) => {
        const getUser = await axios.get(`http://localhost:8080/user/show/${id}`)
        setUser(getUser.data)
    }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-3' >Register User</h2>
                <form onSubmit={(e)=>submitUser(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input type={"text"} value={user.username} className="form-control" onChange={(e)=>getValue(e)} name="username" placeholder='Enter your name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input type={"text"} value={user.firstName} className="form-control" onChange={(e)=>getValue(e)} name="firstName" placeholder='Enter your first name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className='form-label'>Last Name</label>
                    <input type={"text"} value={user.lastName} className="form-control" onChange={(e)=>getValue(e)} name="lastName" placeholder='Enter your last name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type={"text"} value={user.email} className="form-control" onChange={(e)=>getValue(e)} name="email" placeholder='Enter your email'/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-3' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser