import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const navigate = useNavigate()

    const[user, setUser] = useState({});

    const getValue = (e) => {
        setUser({...user,
            [e.target.name] : e.target.value
        })
    }

    const submitUser = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/user/add", user)
        navigate("/")
    }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-3' >Register User</h2>
                <form onSubmit={(e)=>submitUser(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input type={"text"} className="form-control" onChange={(e)=>getValue(e)} name="username" placeholder='Enter your name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input type={"text"} className="form-control" onChange={(e)=>getValue(e)} name="firstName" placeholder='Enter your first name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className='form-label'>Last Name</label>
                    <input type={"text"} className="form-control" onChange={(e)=>getValue(e)} name="lastName" placeholder='Enter your last name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type={"text"} className="form-control" onChange={(e)=>getValue(e)} name="email" placeholder='Enter your email'/>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-3' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser