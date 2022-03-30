import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../Redux/Action/Action'
import cuid from 'cuid';
import { useSelector } from 'react-redux';
import { deleteTodo } from '../Redux/Action/Action';

const Redux = () => {
    const [todo, setTodo] = useState('')
    const Todo = useSelector((state) =>state.list)
    
    const disptach = useDispatch()
    const handleOnClick =()=>{
        if(todo.length){
            disptach(addTodo({task:todo,id:cuid()}))
            setTodo('')
        }
       
  
       
    }

  return (
    <div className='App mt-5'>
        <div className="contro__input">
            <label htmlFor="">Your List</label>
            <input type="text" name='userInput'value={todo}  onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={()=>handleOnClick  ()}>Add</button>
        </div>
        <div>
  {
      Todo.map((elm)=>{
          return(
              <div key={elm.id}>
            <li>{elm.task}</li>
            <button onClick={()=>disptach(deleteTodo(elm.id))}>Remove</button>
           
            </div>

          )
         
      })
  }
        </div>
    </div>
  )
}

export default Redux