import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function UserSupport() {
  const dispatch = useDispatch();
  const [support, setSupport ] = useState('');
  const history = useHistory();
  const navigateNext = () => {
    if(support <= 0 || support > 5) {
      alert('Input must be 1-5')
    }else{
      dispatch({
        type: 'NEW_SUPPORT',
        payload: support
      })
      history.push('/UserComment');
    }  
  };

  return (
    <div>
    <Header />
      <div className='input-container'>
       <h1>How well are you being supported?</h1>
         <div className='button-input-container'>
           <div className='input-box'>
           <h3>Support</h3>
           <input className='input' type="number" min ="1" max="5" 
            onChange={(event) => setSupport(event.target.value)}>
            </input>
          </div>
          <button className='input-button' onClick={navigateNext}>NEXT</button>
          </div>
      </div>
    </div>
  )

}

export default UserSupport;