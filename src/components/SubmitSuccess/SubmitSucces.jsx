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
        <div>Succes!</div>
        <button onClick={navigateNext}>Leave New Feedback</button>
      </div>
    )
}

export default SubmitSucces;