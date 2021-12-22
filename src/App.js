import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { Header } from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
function App(){



  const [feedback,setFeedback] = useState(FeedbackData);
  const deleteFeedback=(id)=>{
      if(window.confirm("you sure")){
          setFeedback(feedback.filter((item)=>item.id!==id))
      }
  }
  const addFeedBack=(newFeedBack)=>{
    newFeedBack.id = uuidv4()
    setFeedback([newFeedBack,...feedback])
  } 
   return (
    <>
    <Header/>
    <div className="container">
    <FeedbackForm handleAdd={addFeedBack}/>
    <FeedbackStats feedback={feedback}/>

    <FeedbackList feedback={feedback}
    
    handleDelete={deleteFeedback}/>

    </div>
    </>
  )
}

export default App;
