import React from 'react'
import TopicCard from '../topicCard/TopicCard'
import './TopicList.css';

export default function TopicList({ topics, deletePost, voteUp, voteDown }) {
  return (
    <div className='listContainer'>
      {
        topics.map(topic => <TopicCard 
          key={topic._id} 
          topic= {topic} 
          voteUp={voteUp}
          voteDown={voteDown} 
          deletePost={deletePost}
          />
          )
      }
    </div>
  )
}