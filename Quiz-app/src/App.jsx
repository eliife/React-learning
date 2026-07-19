import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Introduce from './ıntoduce/Introduce'
import Quiz from './quiz/Quiz'

function App() {
 
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Introduce/>}/>
        <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>

      </Routes>
    </Router>
   </div>
  )
}

export default App
