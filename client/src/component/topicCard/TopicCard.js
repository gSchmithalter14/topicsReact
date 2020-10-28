import React from 'react'
import './TopicCard.css';

export default function TopicCard({ topic, deletePost }) {
  const handleDelete = (e) => {
    deletePost(topic._id)
  }

  return (
    <div className='card'>
      <div className='card_content'>
        <div className='card_votes'>
          <button className='card_votes_up'>Vote up</button>
          <p className='card_votes_score'>{topic.votes}</p>
          <button className='card_votes_down'>Vote down</button>
        </div>
        <div className='card_text'>
          <h3 className='card_text_content'>{topic.content}</h3>
          <div className='card_text_created'>
            <p className='card_text_created_text'>CREATED ON</p>
            <p className='card_text_created_date'>{topic.date}</p>
          </div>
        </div>
      </div>
      <button className='card_btn' onClick={handleDelete}>DELETE</button>
    </div>
  )
}
