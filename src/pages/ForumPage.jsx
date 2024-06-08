import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';
import { asyncCreateTalk } from '../states/threads/action';
import {
    asyncUpVoteTalk,
    asyncDownVoteTalk,
    asyncNeutralizeVoteTalk,
  } from '../states/threads/action';
import ForumList from '../components/ForumList';


const ForumPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const talks = useSelector((state) => state.threads);
    const users = useSelector((state) => state.users);
    const authUser = useSelector((state) => state.authUser);
    
    const dispatch = useDispatch();

    const categories = new Set(talks.map((talk) => talk.category));

    useEffect(() => {
        dispatch(asyncPopulateUsersAndTalks());
    }, [dispatch]);
    
    const onUpVoteThread = (id) => {
        dispatch(asyncUpVoteTalk(id));
      };
    
      const onDownVoteThread = (id) => {
        dispatch(asyncDownVoteTalk(id));
      };
    
      const onNeutralizeVoteThread = (id) => {
        dispatch(asyncNeutralizeVoteTalk(id));
      };

    const talkList = talks.map((talk) => ({
        ...talk,
        user: users.find((user) => user.id === talk.ownerId),
        authUser: authUser.id,
    }));

    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || '';
    });

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredForum = talkList.filter((talk) => {
        return talk.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <div className='text-white m-8 '>
            <h1 className='text-4xl font-bold'>Forum</h1>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <ForumList talks={filteredForum} upVote={onUpVoteThread} downVote={onDownVoteThread} neutralizeVote={onNeutralizeVoteThread} />
        </div>
    );
};

export default ForumPage;
