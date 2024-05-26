import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/register')
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover" style={{'backgroundImage': "url('../pixel-night-wallpaper.png')"}}>
      <h1 className="font-sans text-3xl font-semibold absolute top-3 left-3 text-white">GameMaster</h1>
      <div className="bg-slate-800 boder border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40 relative">
        <RegisterInput register={onRegister} />
        <p className='text-white'>
          Already have an account?{' '}
          <Link to="/login" className='underline'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
