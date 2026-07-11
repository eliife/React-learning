import { useState } from 'react';
import './App.css'
import TodoCreate from './components/TodoCreate';
import TodoList from './components/todoList';

function App() {
  const[todos,setTodos]=useState([]);

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);

  }
  const removeTodo=()=>{
    setTodos([...todos.filter((todo)=>todo.id!==todo.id)]);
  }





  console.log(todos);

  return (
   <div className='App'>
     <div style={{width:'800px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo}/>
    </div>
   </div>
   
    
  )
}

export default App
