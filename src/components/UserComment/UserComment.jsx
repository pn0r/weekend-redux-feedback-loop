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
        <div>Any comments you want to leave?</div>
        <input type="text"
        onChange={(event) => setComment(event.target.value)}>
        </input>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserComment;