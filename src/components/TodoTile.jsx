import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todos/TodoSlice';


const TodoTile = () => {

    const todos=useSelector(((state)=>state.todos.todos))
    console.log(todos);
    const dispatcher= useDispatch()

function removeElement(){
   
}

  return (
    <>
        {todos.map((todo)=>(
                <div key={todo.id}  className="w-[60%] m-auto p-2 flex justify-around flex-row align-middle bg-black text-white rounded-lg my-2 ">
                    {todo.text}
                    <button className="h-[90%] px-2 bg-red-500 text-white" onClick={()=> dispatcher(removeTodo(todo.id))}  >Delete</button>
                </div>
            )
        )}
    </>
  )
}

export default TodoTile;