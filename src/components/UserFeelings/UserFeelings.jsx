import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function UserFeelings() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/UserUnderstanding');
      };
    return (
      <div>
        <Header />
        <div>FEELINGS</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserFeelings;