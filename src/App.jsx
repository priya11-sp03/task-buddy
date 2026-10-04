import { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import "./App.css";

export default function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask
    ]);
  };


  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };


  return (
    <div className="app">

      <h1>Task Buddy</h1>

      <TaskForm
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />

      <ProgressTracker
        tasks={tasks}
      />

      {tasks.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearTasks}
        >
          Clear All Tasks
        </button>
      )}

    </div>
  );
}