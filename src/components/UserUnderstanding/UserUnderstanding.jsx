import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';


function UserUnderstanding() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/UserSupport');
      };

    return (
      <div>
        <Header />
        <div>understanding</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserUnderstanding;