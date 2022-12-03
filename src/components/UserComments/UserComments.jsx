import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function UserComments() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/UserReview');
      };
    return (
      <div>
        <Header />
        <div>userComments</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserComments;