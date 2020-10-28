import React, { useState } from 'react'

export default function Form({ postTopic }) {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length === 0 ) return
    console.log('hello');
    const topic = {
      content: content,
      date: new Date()
    };
    postTopic(topic);
    setContent('');
  }

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <form className='from' onSubmit={handleSubmit}>
      <input className='from_input' type='text' value={content} onChange={handleChange}></input>
      <button className='from_btn'>Add Topic</button>
    </form>
  )
}
