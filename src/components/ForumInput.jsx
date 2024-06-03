import React, { useState } from 'react';

const ForumInput = ({ addTalk }) => {
    const [text, setText] = useState('');

    function addtalk() {
        if (text.trim()) {
            addTalk(text);
            setText('');
        }
    }

    function handleTextChange({ target }) {
        if (target.value.length <= 320) {
            setText(target.value);
        }
    }

    return (
        <div className="flex justify-center items-center w-5/6">
            <div className="w-screen max-w-2xl mx-auto text-center mt-6">
                <textarea
                    type="text"
                    placeholder="Tell everybody what do you think..."
                    value={text}
                    onChange={handleTextChange}
                    className="mt-6 w-full h-56 text-black p-4 border rounded-lg resize-none"
                />
                <p className="mt-2">
                    <strong>{text.length}</strong>/320
                </p>
                <button
                    type="submit"
                    onClick={addtalk}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ForumInput;
