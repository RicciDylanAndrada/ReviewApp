import './App.css';
import { useState } from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Header } from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconlink from './components/AboutIconlink';
import About from "./pages/AboutPage"
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './contexts/FeedbackContext'
function App(){



  
  
   return (
     <FeedbackProvider>


    <Router>
    <Header/>
    <div className="container">
    <Routes>
      <Route exact path="/" element={
        <>
         <FeedbackForm />
        <FeedbackStats />

        <FeedbackList  />
        </>

      }>
       
      </Route>
    <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </div>
    <AboutIconlink/>
    </Router>
    </FeedbackProvider>

  )
}

export default App;
