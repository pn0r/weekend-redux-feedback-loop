import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function UserComment() {
  const dispatch = useDispatch();
  const [comment, setComment ] = useState('');
  const history = useHistory();
  const navigateNext = () => {
    if(comment === '') {
      alert('Enter a comment')
    }else{
      dispatch({
        type: 'NEW_COMMENT',
        payload: comment
      })
      history.push('/UserReview');
    }  
  };

  return (
    <div>
     <Header />
      <div className='input-container'>
        <h1>Any comments you want to leave?</h1>
          <div className='button-input-container'>
            <div className='input-box'>
            <h3>Comments</h3>
            <input className='input' type="text" min ="1" max="5" 
            onChange={(event) => setComment(event.target.value)}>
            </input>
          </div>
          <button className='input-button' onClick={navigateNext}>NEXT</button>
          </div>
      </div>
    </div>
  )
}

export default UserComment;
