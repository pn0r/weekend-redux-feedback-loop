import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SubmitSucces() {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigateNext = () => {
    history.push('/');
      dispatch({
        type: 'CLEAR'
      })
    };
    return (
        <div>
        <header className='feedback-header'>
          <h1>Feedback!</h1>
        </header>
        <div className='feedback-body'>
          <h1>Thank You!</h1>
          <button className='new-feedback-button' onClick={navigateNext}>Leave New Feedback</button>
        </div>
      </div>
    )
}

export default SubmitSucces;