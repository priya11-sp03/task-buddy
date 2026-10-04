import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setError("Please enter a task.");
      return;
    }

    addTask({
      text: task.trim(),
      priority,
      category,
      completed: false,
    });

    setTask("");
    setPriority("Medium");
    setCategory("General");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

      <div id="inp">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
        />

        <button type="submit">
          Add Task
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div id="btns">

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>

      </div>
    </form>
  );
}