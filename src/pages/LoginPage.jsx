import React from 'react';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ username, password }) => {
    dispatch(asyncSetAuthUser({ username, password }));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover" style={{'backgroundImage': "url('../public/pixel-night-wallpaper.png')"}}>
      <h1 className="font-sans text-3xl font-semibold absolute top-3 left-3 text-white">GameMaster</h1>
      <div className="bg-slate-800 boder border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40 relative">
        <LoginInput login={onLogin} />
        <p className='text-white'>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
