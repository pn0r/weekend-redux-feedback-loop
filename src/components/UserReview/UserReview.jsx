import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

function UserReview() {
  const feelings = useSelector(store => store.FeelingsReducer)
  const understanding = useSelector(store => store.UnderstandingReducer)
  const support = useSelector(store => store.SupportReducer)
  const comment = useSelector(store => store.CommentReducer)
  const history = useHistory();
    

  const reviewObject = {
    feeling: feelings,
    understanding: understanding,
    support: support,
    comments: comment
  }

  const navigateNext = () => {
    history.push('/SubmitSucces');
    axios.post('/review', reviewObject)   
    .then(response => {
      console.log('succesfull POST', response)
    }).catch(err => {
      console.log('error posting', err)
    })              
  };


  return (
    <div className='review-container'>
      <h2>Review Your Feedback</h2>
      <div className="review-row">Feelings: {feelings}</div>
      <div className="review-row">Understanding: {understanding}</div>
      <div className="review-row">Support: {support}</div>
      <div className="review-row">Comments: {comment}</div>
      <button className='input-button' onClick={navigateNext}>SUBMIT</button>
    </div>
  )
}

export default UserReview;

