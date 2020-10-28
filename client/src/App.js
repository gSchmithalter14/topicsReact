import { useState, useEffect } from 'react'
import './App.css';
import Form from './component/form/Form';
import TopicList from './component/topicList/TopicList';

function App() {
  const [topics, setTopics] = useState([])

  useEffect( () => {
    fetch('http://localhost:4000/topics')
    .then(res => res.json())
    .then(data => setTopics(data))
  }, []);

  const postTopic = (topic) => {
    fetch('http://localhost:4000/topics', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(topic)
    })
    .then(res => res.json())
    .then(resData => setTopics(topics => [...topics, resData.data]))
  }

  const deletePost = (id) => {
    fetch(`http://localhost:4000/topics/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
    .then(
      setTopics(topics.filter(topic => topic._id !== id))
    )
  }

  return (
    topics.length === 0 ? (
      <div className='app_container'>
        <Form postTopic={postTopic}/>
        <h1>Write some topics</h1>
        </div>
    ): 
      ( 
      <div className='app_container'>
        <Form postTopic={postTopic}/>
        <TopicList topics={topics} deletePost={deletePost}/>
      </div>
      )
  )
}

export default App;
