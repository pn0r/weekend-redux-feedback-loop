import { useHistory } from 'react-router-dom';

function UserReview() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/SubmitSucces');
      };
    return (
      <div>
        <div>Review</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserReview;