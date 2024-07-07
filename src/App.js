import { useState } from "react";
import AllTodos from "./components/AllTodos";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import './index.css'

function App() {

  const [todosList, setTodosList] = useState([])

  const addTodo = (todoreceived) => {
      if(todoreceived.value !== undefined && todoreceived.value.trim() !== '') {
        setTodosList([...todosList, todoreceived])
      }
  }

  const handleIsCompleted = (indexReceived) => {
      let updatedList = [...todosList]
      updatedList[indexReceived].isCompleted = !updatedList[indexReceived].isCompleted
      setTodosList(updatedList)
  }

  const handleUpdate = (indexReceived) => {
      const updatedValue = prompt('enter updated value')
      if(updatedValue !== null && updatedValue.trim() !== '') {
        let updatedList = [...todosList]
        updatedList[indexReceived].value = updatedValue
        setTodosList(updatedList)
      }
  }

  const handleDelete = (idReceived) => {
    let updatedList = [...todosList]
    updatedList = updatedList.filter((item)=>item.id !== idReceived)
    setTodosList(updatedList)
  }


  return (
    <div className="App">
        <Header />
        <InputForm addTodo ={addTodo}/>
        <AllTodos todosList={todosList} handleIsCompleted={handleIsCompleted} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
