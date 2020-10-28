import React from 'react'
import TopicCard from '../topicCard/TopicCard'
import './TopicList.css';

export default function TopicList({ topics, deletePost }) {
  return (
    <div className='listContainer'>
      {
        topics.map(topic => <TopicCard key={topic._id} topic= {topic} deletePost={deletePost}/>)
      }
    </div>
  )
}