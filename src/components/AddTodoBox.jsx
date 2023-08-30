import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo,removeTodo } from '../features/todos/TodoSlice';

const AddTodoBox = () => {

const [value,setValue] = useState("");
const dispatcher= useDispatch();

function addelement(){
    dispatcher(addTodo(value));
    setValue("");
}

  return (
    <>
    <h1 className="text-center w-full font-bold pt-4 text-2xl ">TODO</h1>
    <div className="w-full flex justify-center align-middle p-6 flex-row  bg-cyan-950 text-white">
        <input className="rounded-l-xl text-black" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className="p-4 rounded-r-xl bg-purple-800 text-white font-extrabold hover:bg-purple-950" onClick={addelement}>+</button>
    </div>
    </>
    
  )
}

export default AddTodoBox;