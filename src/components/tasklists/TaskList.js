import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

function TaskList() {
  const { taskItems, removeFromTask } = useContext(TaskContext);

  return (
    <>
      <h5 class="fst-italic custom">Task List</h5>
      {taskItems.length > 0 ? (
        <ul class="fst-italic">
          {taskItems.map((task, index) => (
            <li key={index}>
              {task}
              <div>
                <button
                  onClick={() => removeFromTask(index)}
                  class="btn btn-outline-success btn-sm"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p class="custom fs-6 fw-lighter">No tasks assigned.</p>
      )}
    </>
  );
}

export default TaskList;
