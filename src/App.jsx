import React, {useEffect} from 'react';
import Loading from './components/Loading';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import HomePage from './pages/HomePage';

const App = () => {
  const {
    authUser = 'null',
    isPreload = false
  } = useSelector((states) => states)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div>
        <header>
        </header>
          <Routes>
            <Route path="/*" element={<IntroPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        
      </div>
    </>
  )

}
  
export default App;
