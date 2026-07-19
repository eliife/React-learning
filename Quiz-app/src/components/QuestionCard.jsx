import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

function QuestionCard(questionData,score,setScore,count,setCount,modal,setModal) {
    const[timer,setTimer]=useState(30)
    const approvedChoice=(e)=>{
        console.log(e.currentTarget.value)
        const checkAnswer=e.currentTarget.value==questionData[count]?.correct_answer
        if(checkAnswer){
            setScore(score+100)
        }
        setCount(count+1)
        if(count==9) setModal()
            setTimer(30)

    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(timer>0){
                setTimer(timer-1)

            }
            if(timer==0 && count<10){
                setCount(count+1)
                setTimer(30)
            }else if(count>=10){
                setModal(true)
            }
            return ()=>{
                clearInterval(interval)
            }
        },1000)

    },[timer])
  return (
    <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>
        <div className='questionCardTitle'>
            {count + 1}/10 -{questionData[count]?.question} </div>
            {
                questionData[count]?.answers?.map((answer,i)=>(
                    <button  onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }
    </div>
  )
}

export default QuestionCard