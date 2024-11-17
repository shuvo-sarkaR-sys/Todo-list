import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputValue = (e)=>{
    setTodo(e.target.value)
  }
  const handleAdd =()=>{
    if (todo.length > 0) {
       setTodos([...todos, {id: uuidv4(), todo, inCompleted: false} ])
    setTodo("")
    }
   
     
  }
  const handleCheckBox = (e)=>{
   let id = e.target.name
   console.log(id);
   let index = todos.findIndex(item=>{
    return item.id === id;
   })
   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos)
  }
  const handleDelete =(e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)

  }
  const handleEdit =(e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)

  }
  return (
    <>
    <div className='w-[600px] pt-2 bg-gray-300 m-auto mt-28 min-h-[50vh] rounded-md'>
        <h2 className='  ml-6'>Your Todo</h2>
      <input  onChange={inputValue} value={todo} className='ml-16 mb-8 mt-8 h-8 w-[380px] rounded-l-md' type="text" />
      <button onClick={handleAdd} className='bg-amber-600 px-3 py-1 rounded-r-lg'>Add</button>
   
    {todos.map(item=>{
      return <div className='flex justify-between mx-10' key={item.id}>
        <div className='flex gap-5'> 
    <input name={item.id} onChange={handleCheckBox} checked={item.isCompleted} type="checkbox" />
    <p className={item.isCompleted ? "line-through" : ""}>{item.todo}</p>
    </div>
    <div className='flex gap-5'> 
    <button className='bg-green-600 p-1 rounded-md' onClick={(e)=>{handleEdit(e, item.id)}}>Edit</button>
    <button className='bg-red-600 p-1 rounded-md' onClick={(e)=>{handleDelete(e, item.id)}}>Delete</button></div>
    </div>})}
     </div>
    </>
  )
}

export default Home
