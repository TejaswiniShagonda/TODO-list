import React from 'react'

const TodoItem = ({index, item, handleIsCompleted, handleUpdate, handleDelete}) => {

  const lineThrough = {textDecoration: 'line-through'}

  return (
    <div className='todo-item-container'>
        <div>
            <p className='txt-md' style={item.isCompleted ? lineThrough : {}}>{item.value}</p>
        </div>
        <div>
            <button onClick={()=>{handleIsCompleted(index)}} className='bg-green'><i className="fa-solid fa-check"></i></button>
            <button onClick={()=>{handleUpdate(index)}} className='bg-orange'><i className="fa-solid fa-pen"></i></button>
            <button onClick={()=>{handleDelete(item.id)}} className='bg-red'><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default TodoItem
