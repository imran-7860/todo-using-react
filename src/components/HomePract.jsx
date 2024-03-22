import React from "react";
import { useState } from "react";

const HomePract = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteButtonClick = (index) => {
    const handleupdate = [...todoList];
    handleupdate.splice(index, 1);
    setTodoList(handleupdate); // Fix here
  };

  return (
    <>
      <h1 className="text-center font-bold mt-10 text-4xl">Todo List</h1>
      <div>
        <div className="flex justify-center mt-10 gap-6">
          <input
            type="text"
            placeholder="Enter Something Here"
            value={inputValue}
            onChange={handleInputChange}
            className="w-72 h-10 outline-none border border-blue-200 rounded pl-3"
          />
          <button
            className="h-10 bg-green-400 p-2 rounded w-16"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>

        <div className="flex justify-center items-center mt-5 ">
          <ul>
            {todoList.map((item, index) => (
              <li
                key={index}
                className="flex justify-center items-center mt-2 h-10"
              >
                <span className="w-72 h-10 outline-none border border-blue-200 pl-3">{item}</span> {/* Fix typo here */}
                <button
                  onClick={() => handleDeleteButtonClick(index)}
                  className="ml-6 p-2 bg-red-400 text-white rounded h-10  w-16"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePract;
