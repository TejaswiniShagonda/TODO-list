import React from 'react'
import TodoItem from './TodoItem'

const AllTodos = ({todosList, handleIsCompleted, handleUpdate, handleDelete}) => {
  return (
    <div className='all-todos-container'>
        {
            todosList.length === 0 ?
            <p>No todos</p>
            : (
                todosList.map((item, index)=>{
                    return(
                        <TodoItem key={index} index={index} item={item} handleIsCompleted={handleIsCompleted} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
                    )
                })
            )
        }
    </div>
  )
}

export default AllTodos
