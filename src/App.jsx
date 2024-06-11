import React, { useEffect } from 'react';
import Loading from './components/Loading';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import VideoDetailPage from './pages/VideoDetailPage';
import ForumPage from './pages/ForumPage';
import ForumAddPage from './pages/ForumAddPage';
import { asyncCreateTalk } from './states/threads/action';
import GameDetailPage from './pages/GameDetailPage';
import ForumDetailPage from './pages/ForumDetailPage';
import VideoModulePage from './pages/VideoModulePage';

const App = () => {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div>
          <header></header>
          <Routes>
            <Route path="/*" element={<IntroPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="flex bg-home-bg">
        <Sidebar authUser={authUser} onSignOut={onSignOut} />
        <main>
          <Routes>
            <Route path="/*" element={<HomePage authUser={authUser} />} />
            <Route path="/games/:id" element={<GameDetailPage />} />
            <Route path="/video" element={<VideoModulePage />} />
            <Route path="/videos/:title" element={<VideoPage />} />
            <Route path="/videos/:title/:id" element={<VideoDetailPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/forum/:threadId" element={<ForumDetailPage />} />
            <Route path="/forumAdd" element={<ForumAddPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
