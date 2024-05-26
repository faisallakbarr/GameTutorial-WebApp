import React, {useEffect} from 'react';
import Loading from './components/Loading';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Sidebar from './components/Sidebar';
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

  if(authUser === null) {
  return (
    <>
      <Loading />
      <div>
        <header>
        </header>
          <Routes>
            <Route path="/*" element={<IntroPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
      </div>
    </>
  )
}

return (
  <>
    <Loading />
    <header>
      <Sidebar authUser={authUser} onSignOut={onSignOut} />
    </header>
    <main>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </main>
  </>
)

}
  
export default App;
