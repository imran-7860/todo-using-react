import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      localStorage.setItem(`${todoList.length}`,inputValue)
      localStorage.setItem('total',todoList.length+1)
      setInputValue('');
    }
  };

  const handleDeleteButtonClick = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <>
    {/* revise useEffect , how to fecth from broswer localstorage , implement after reload show previous task ,after deleting remove data from localstroage */}
      <h1 className='text-center font-bold mt-10 text-4xl'>Todo List</h1>
      <div>
        <div className='flex justify-center mt-10 gap-6'>
          <input
            type='text'
            placeholder='Enter Something Here'
            value={inputValue}
            onChange={handleInputChange}
            className='w-72 h-10 outline-none border border-blue-200 rounded pl-3'
          />
          <button
            className='h-10 bg-green-400 p-2 rounded w-16'
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
        <div className='flex justify-center mt-5 '>
          <ul >
          <span>____________________________________________________________________</span>
            {todoList.map((item, index) => (
                
              <li key={index} className='flex justify-center items-center mt-2 h-10 '>
              
                <span className='w-72 h-10 outline-none border border-blue-200 font-bold pl-3'>{item}</span>
                <button
                  className='ml-6 p-2 bg-red-400 text-white rounded h-10  w-16'
                  onClick={() => handleDeleteButtonClick(index)}
                >
                  Delete
                </button>
              </li>
            ))}
            <span>____________________________________________________________________</span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
