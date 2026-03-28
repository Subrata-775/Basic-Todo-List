import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([{
        task: "Sample Task", id: uuidv4()
    }]);

    const taskHandler = (e) => {
        setNewTask(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return;

        setTasks((prev) => [...prev, { task: newTask, id: uuidv4() }]);
        setNewTask("");
    };
    const deletetask = (id) => {
        setTasks((prevTask) => tasks.filter((prevTask) => prevTask.id != id));
    };
    // to upperCase  use  map 
    let upperCaseAll = () => {
        setTasks((prevtodos) => prevtodos.map((EachTask) => {
            return {
                ...EachTask, task: EachTask.task.toUpperCase()
            }
        }))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">

            {/* Card */}
            <div className="w-full max-w-lg bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 border border-white/30">

                {/* Title */}
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
                    ✨ Todo List
                </h1>

                {/* Form */}
                <form onSubmit={submitHandler} className="flex gap-2 mb-5">
                    <input
                        type="text"
                        value={newTask}
                        onChange={taskHandler}
                        placeholder="Add your task..."
                        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
                    >
                        Add
                    </button>
                    <div>
                        <button onClick={upperCaseAll} type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200">UpperCaseAll</button>
                    </div>
                </form>

                {/* Task List */}
                <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
                    {tasks.map((t, index) => (
                        <li
                            key={t.id}
                            className="flex justify-between items-center bg-white rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition"
                        >
                            <span className="text-gray-700 font-medium">
                                {t.task}
                            </span>

                            {/* Delete Button */}
                            <button
                                onClick={() => deletetask(t.id)}
                                className="text-red-400 hover:text-red-600 transition"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
                <br />


                {/* Empty State */}
                {tasks.length === 0 && (
                    <p className="text-center text-gray-300 mt-4 text-sm">
                        No tasks yet 🚀
                    </p>
                )}
            </div>
        </div>
    );
}

export default TodoList;