import React, { useState } from 'react'

const InputForm = (props) => {

    const [todo, setTodo] = useState({})

    const readInput = (event) => {
        if(event.target.value !== '')
            setTodo({id: Math.random(), value: event.target.value, isCompleted: false})
    }

  return (
    <div className='input-container'>
        <div>
            <input onChange={readInput} type="text" value={todo.value} placeholder='enter an activity'/>
            <button onClick={()=>{props.addTodo(todo); setTodo({value:''})}}>Add</button>
        </div>
    </div>
  )
}

export default InputForm
