import React from 'react'
import './Introduce.css'
import Dropdown from '../components/Dropdown'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 
function Introduce() {
    const difficulty=["easy","medium","hard"];
    const [difficultyChange, setDifficultyChange]=useState('');
    const navigate=useNavigate();
    
    const TOTAL_QUESTIONS=10;

    const startQuiz=()=>{
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
        }

    }
  return (
    <div className='introduce'>
        <div className='introduce-container'>
            <img src="https://www.pngmart.com/files/19/Quiz-Logo-PNG-HD.png"/>
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>QUİZ'E BAŞLA</div>
        </div>
    </div>
  )
}

export default Introduce