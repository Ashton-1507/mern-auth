import React from 'react';

import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function Signup() {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const handleChange = (e) =>{
      setFormData({...formData,[e.target.id]:e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
    const response = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    if(data.sucess === false){
      setError(true);
      return;
    }
  }
  catch(e)
  {
    setLoading(false);
    setError(true);
  }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder = 'Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <input type="email" placeholder = 'email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <input type="password" placeholder = 'password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}></input>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading?'Loading...':'SignUp'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong'} </p>
    </div>
  )
}
