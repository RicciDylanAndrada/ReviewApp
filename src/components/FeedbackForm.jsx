import { useState } from "react"
import Card from "./share/Card"
import Button from "./Button"
import RatingSelect from "./RatingSelect"
export default function FeedbackForm({handleAdd}) {

    const [text,setText]=useState("")
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState("message")
    const [rating,setRating]=useState(10)

    const handleTextChange = (e)=>{
        if(text ==='' ){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if ( text!==''&& text.trim().length <=10){
            setMessage("To short")
            setBtnDisabled(true)
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(text.trim().length >10){
            const newFeedback ={
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }
   

    return (
        <Card>
        <form onSubmit={handleSubmit}>         
           <h2>How would you rate your service with us?</h2>
<RatingSelect select={(rating) =>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} 
                    type="text" 
                    value={text} 
                    placeholder="write a review"/>
                    <Button  type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message&& <div className="message">{message}</div>}
        </form>
        </Card>
    )
}
