import { useState } from "react";

export const NewTasks = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if(enteredTask.trim() ==='') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-md text-stone-600 bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};