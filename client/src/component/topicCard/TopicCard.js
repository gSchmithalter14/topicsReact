import React, {useState} from 'react'
import './TopicCard.css';

export default function TopicCard({ topic, deletePost, voteUp, voteDown }) {

  const [votes, setVotes] = useState(topic.votes)

  const handleDelete = () => deletePost(topic._id);
  
  const handleVoteUp = () => {
    setVotes(votes => votes + 1)
    voteUp(topic._id);
  }

  const handleVoteDown = () => {
    if (votes === 0) {
      setVotes(0) } else {
        setVotes(votes => votes - 1)
      }
    
    voteDown(topic._id);
  }

  return (
    <div className='card'>
      <div className='card_content'>
        <div className='card_votes'>
          <button onClick={handleVoteUp} className='card_votes_up'>Vote up</button>
          <p className='card_votes_score'>{votes}</p>
          <button onClick={handleVoteDown} className='card_votes_down'>Vote down</button>
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
