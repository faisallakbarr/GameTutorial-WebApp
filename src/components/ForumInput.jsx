import React, {useState} from 'react'

const TalkInput = ({ addTalk }) => {
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
    <div>
      <textarea 
      type="text" 
      placeholder="Tell everybody what do you think..." 
      value={text} 
      onChange={handleTextChange} />
      <p className="">
        <strong>{text.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addtalk}>Talk</button>
    </div>
  )
}

export default TalkInput
