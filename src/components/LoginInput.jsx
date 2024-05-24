import React from 'react'
import PropTypes from 'prop-types'
import { IoPersonSharp } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import useInput from '../hooks/useInput'

const LoginInput = ({ login }) => {
  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='flex flex-col'>
    <h1 className='text-center text-white font-sans text-4xl font-bold pb-10 mt-3'>Login</h1>
      <div className='relative flex items-center'>
        <IoPersonSharp className='absolute left-1 text-3xl pb-1 text-white active:border-transparent' />
        <input 
          className='py-1 pb-2 pl-10 pr-20 my-4 w-full focus:outline-none text-white bg-transparent border-b-2 border-white' 
          type='text' 
          value={username} 
          onChange={onUsernameChange} 
          placeholder='Username' 
        />
      </div>
      <div className='relative flex items-center'>
      <IoLockClosed className='absolute left-1 text-3xl pb-1 text-white active:border-transparent' />
      <input 
        className='py-1 pb-2 pl-10 pr-20 my-4 w-full focus:outline-none text-white bg-transparent border-b-2 border-white' 
        type='password' 
        value={password} 
        onChange={onPasswordChange} 
        placeholder='Password' 
      />
      </div>
      <button 
        type='button' 
        onClick={() => login({ username, password })}
        className='bg-blue-500 text-white py-1 my-4 outline outline-blue-400 text-xl hover:bg-blue-700 hover:text-white rounded-md'
        >
        Login
      </button>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput
