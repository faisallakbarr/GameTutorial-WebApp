import React from 'react';
import ForumInput from '../components/ForumInput';

const ForumAddPage = ({ onAddTalk }) => {
    return (
        <div className='text-white m-8 '>
            <h1 className='text-4xl font-bold'>Add Talk</h1>
            <ForumInput addTalk={onAddTalk} />
        </div>
    );
};

export default ForumAddPage;
