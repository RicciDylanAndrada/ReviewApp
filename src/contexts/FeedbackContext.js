import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext= createContext()
export const FeedbackProvider = ({children})=>{
const[feedback,setFeedback]=useState([
    {
        id:1,
        text:'This item is from context',
        rating:10
    }
])

//states for feedbackedits
const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
})



const deleteFeedback=(id)=>{
    if(window.confirm("you sure")){
        setFeedback(feedback.filter((item)=>item.id!==id))
    }
    
}
const addFeedback=(newFeedBack)=>{
    newFeedBack.id = uuidv4()
    setFeedback([newFeedBack,...feedback])
  } 
 

const updateFeedback=(id,upItem)=>{
    setFeedback(feedback.map((item)=> item.id===id?{...item,...upItem}:item ))

}
  //set item to be updated

  const editFeedback=(item) =>{
      setFeedbackEdit({
          item,
          edit:true
      })
  }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback

    }}>

        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext