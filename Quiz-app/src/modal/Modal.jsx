import React from 'react'
import './modal.css'

function modal(score) {
  return (
    <div> 
    <div className='modal'>Skor:{score}</div>
    <div className='modal-btn'onClick={()=>window.location="/"}>Yeniden Başla</div>
    </div>
  
  )
}

export default modal