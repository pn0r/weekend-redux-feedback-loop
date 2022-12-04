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
          <div className='input-container'>
          <h1>How Are You Feeling Today?</h1>
            <div className='button-input-container'>
              <div className='input-box'>
                <h3>Feelings</h3>
              <input className='input' type="number" min ="1" max="5" 
              onChange={(event) => setFeeling(event.target.value)}>
              </input>
              </div>
            <button className='input-button' onClick={navigateNext}>NEXT</button>
            </div>
          </div>
      </div>
    )
}

export default UserFeelings;