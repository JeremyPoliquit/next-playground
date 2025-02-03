"use client"
import React from 'react'
import useForm from '../hooks/useForm'

const RegisterForm = () => {
  const { formData, handleChange, handleSubmit } = useForm({
      initialize: { username: "", password: ""},
  }); 
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" value={formData.username} name='username' onChange={handleChange} className='input input-bordered w-full max-w-sm' placeholder='Username' />
        <input type="password" value={formData.password} name='password' onChange={handleChange} className='input input-bordered w-full max-w-sm' placeholder='Password' />
        <button type="submit" className='btn btn-success btn-wide text-white'>Enter</button>
    </form>
  )
}

export default RegisterForm