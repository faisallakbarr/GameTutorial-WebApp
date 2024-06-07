import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateTalk } from '../states/talks/action';
import ForumInput from '../components/ForumInput';

const ForumAddPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onAddTalk = ({ title, body, category }) => {
      dispatch(asyncCreateTalk({ title, body, category }));
  
      navigate('/forum');
    };

    return (
        <div className='text-white m-8 '>
            <h1 className='text-4xl font-bold'>Add Talk</h1>
            <ForumInput addTalk={onAddTalk} />
        </div>
    );
};

export default ForumAddPage;
