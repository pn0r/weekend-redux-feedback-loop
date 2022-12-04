import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function UserUnderstanding() {
  const dispatch = useDispatch();
  const [understanding, setUnderstanding ] = useState('');
  const history = useHistory();
  const navigateNext = () => {
    if(understanding <= 0 || understanding > 5) {
      alert('Input must be 1-5')
    }else{
      dispatch({
        type: 'NEW_UNDERSTANDING',
        payload: understanding
      })
      history.push('/UserSupport');
    }  
  };

    return (
      <div>
       <Header />
       <div className='input-container'>
         <h1>How well are you understanding the content?</h1>
           <div className='button-input-container'>
             <div className='input-box'>
             <h3>Understanding</h3>
               <input className='input' type="number" min ="1" max="5" 
               onChange={(event) => setUnderstanding(event.target.value)}>
               </input>
           </div>
           <button className='input-button' onClick={navigateNext}>NEXT</button>
         </div>
         </div>
       </div>
   )
 }

export default UserUnderstanding;