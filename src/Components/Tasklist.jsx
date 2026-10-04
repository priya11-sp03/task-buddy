export default function TaskList({
  tasks,
  completeTask,
  deleteTask,
}) {
  return (
    <ul className="task-list">

      {tasks.length === 0 ? (
        <li className="no-tasks">
          No tasks added yet.
        </li>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
          >

            <div className="task-info">
              <span>{task.text}</span>

              <small>
                {task.priority} • {task.category}
              </small>
            </div>

            <div className="task-actions">

              <button
                type="button"
                onClick={() => completeTask(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                type="button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>

          </li>
        ))
      )}

    </ul>
  );
}