import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';


function UserSupport() {
    const history = useHistory();
    const navigateNext = () => {
        history.push('/UserComments');
      };
    return (
      <div>
        <Header />
        <div>underSupport</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserSupport;