


import FeedbackItem  from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from "../contexts/FeedbackContext"

function FeedbackList()  {
const {feedback}=useContext(FeedbackContext)
   
    return (
        <div className="feedback-list">
        {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}
                />
        ))}
        </div>
    )
}
export default FeedbackList
