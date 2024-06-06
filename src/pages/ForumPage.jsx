import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';
import { asyncToggleLikeTalk, asyncAddTalk } from '../states/talks/action';
import ForumList from '../components/ForumList';


const ForumPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { 
        talks = [], 
        users = [], 
        authUser } 
    = useSelector((states) => states);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateUsersAndTalks());
    }, [dispatch]);

    const onAddForum = (text) => {
        dispatch(asyncAddTalk({ text }));
    }

    const onLike = (id) => {
        dispatch(asyncToggleLikeTalk({ id }));
    };

    const talkList = talks.map((talk) => ({
        ...talk,
        user: users.find((user) => user.id === talk.user),
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
            <ForumList talks={filteredForum} like={onLike} />
        </div>
    );
};

export default ForumPage;
