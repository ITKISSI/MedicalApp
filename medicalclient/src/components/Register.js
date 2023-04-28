import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    let navigate=useNavigate();

    const[patient,setpatient]=useState({
        firstname: "",
        lastname:"",
        age: "",
        cin: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    });

    
    const {firstname,lastname,email,password}=patient;

    const onInputChange = (even) => {
        setpatient({...patient,[even.target.name]:even.target.value});
    };

    const onSubmit = async (even) => {
        even.preventDefault();
        await axios.post("http://localhost:8081/patient/add",patient)
        navigate("/");
    };
    const onCancle = async (even) => {
        even.preventDefault();
        navigate("/");
    };

  return (
    <div className='container'>
        <div className="row">
             <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Register patient</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>First name</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter name'
                                name="firstname"
                                value={firstname}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>Last name</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter name'
                                name="lastname"
                                value={lastname}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type={"text"}
                                className='form-control'
                                placeholder='Enter email'
                                name="email"
                                value={email}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Password</label>
                        <input type={"password"}
                                className='form-control'
                                placeholder='Enter email'
                                name="password"
                                value={password}
                                onChange={(e)=>onInputChange(e)}
                                />
                    </div>
                    <button type='submit' onSubmit={(e)=>onSubmit(e)} className='btn btn-primary mx-2'>Submit</button>
                    <button type='reset' onClick={(e)=>onCancle(e)} className='btn btn-danger mx-2'>Cancel</button>
                </form>
             </div>
        </div>
    </div>
  )
}
