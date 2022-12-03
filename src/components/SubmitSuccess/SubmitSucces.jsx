import { useHistory } from 'react-router-dom';

function SubmitSucces() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/');
      };
    return (
        <div>
        <div>Succes!</div>
        <button onClick={navigateNext}>Leave New Feedback</button>
      </div>
    )
}

export default SubmitSucces;