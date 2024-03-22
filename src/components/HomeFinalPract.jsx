import React, { useState } from 'react'

const HomeFinalPract = () => {
    const [inputValue,setInputValue] = useState('');
    const [todoList,setTodoList] = useState([]);

    const handleSubmit = (e)=>{
      setInputValue(e.target.value)
    }

    const handleButtonClick = ()=>{
        if(inputValue.trim() !==''){
            setTodoList([...todoList,inputValue]);
            setInputValue('');
        }
    }

    const handleDeleteClick = (index)=>{
       const updateTodo = [...todoList];
       updateTodo.splice(index,1);
       setTodoList(updateTodo)
    }
  return (
    <>
        <h1 className='text-center mt-5 font-bold text-4xl'>Todo List</h1>
        <div>
            <div className='mt-5 gap-6 flex justify-center'>
                <input type='text' placeholder='Enter Something' className='outline-none p-2 h-10 w-72 border border-blue-400' value={inputValue} onChange={handleSubmit}/>
                <button className='bg-green-400 p-2 rounded h-10 w-16' onClick={handleButtonClick}>Add</button>
            </div>
        

        <div  className="mt-10 ">
         <ul>
            {todoList.map((item,index)=>(
                <li key={index}  className="flex justify-center items-center mt-2 h-10">
                    <span className='outline-none p-2 h-10 w-72 border border-blue-400'>{item}</span>
                    <button className='bg-red-400 p-2 rounded h-10 w-16 ml-6' onClick={handleDeleteClick}>Delete</button>
                </li>
            ))}
         </ul>
        </div>
        </div>
    </>
  )
}

export default HomeFinalPract