import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
 
function UserFeelings() {
  const dispatch = useDispatch();
  const [feeling, setFeeling ] = useState('');
  const history = useHistory();
  const navigateNext = () => {
    if(feeling <= 0 || feeling > 5) {
      alert('Input must be 1-5')
    }else{
      dispatch({
        type: 'NEW_FEELING',
        payload: feeling
      })
      history.push('/UserUnderstanding');
    }  
  };

    return (
      <div>
        <Header />
        <div>How Are You Feeling Today?</div>
        <input type="number" min ="1" max="5" 
        onChange={(event) => setFeeling(event.target.value)}>
        </input>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserFeelings;