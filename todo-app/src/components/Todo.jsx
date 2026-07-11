import React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import '../App.css';

function todo({todo, onRemoveTodo}) {
    //const[id,content]=todo;

    const removeTodo=()=>{
      onRemoveTodo(todo.id);
    }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',border:'1px solid grey',padding:'10px',width: '100%'}}>
        <div>
            {todo.content}
        </div>
        <div className='todo-icons'>
           <IoIosRemoveCircle onClick={removeTodo} /> 
            
        </div>
       
    </div>
  )
}

export default todo