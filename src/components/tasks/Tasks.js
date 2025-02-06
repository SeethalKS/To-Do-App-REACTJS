import { useContext, useState } from "react";
import TaskList from "../tasklists/TaskList";
import TaskContext from "../../context/TaskContext";
import './Task.css'

function Tasks() {
  const [taskName, setTaskName] = useState("");

  const { addToTask } = useContext(TaskContext);
/*********************************** */
  const addTask = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (taskName.trim()) {
      addToTask(taskName); // Pass the task name
      setTaskName(""); 
    }
  };
/********************************** */
  return (
    <>
      <h5 class="fst-italic custom">Enter your Tasks :</h5>
      <form onSubmit={addTask}>
        <div class="d-flex gap-3">
        <div class="textbar">
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} class="form-control form-control-sm"/>
        </div>
        <div class="btnadd">
        <button type="submit" class="btn btn-primary"> ADD TASK</button>
        </div>
        </div>
      </form>
      <TaskList />
    </>
  );
}

export default Tasks;
