import Tasks from "./components/tasks/Tasks";
import TaskContext from "./context/TaskContext";
import { useState, useEffect } from "react";
import './App.css'
function App() {
  // Initialize taskItems from localStorage
    const [taskItems, setTaskItems] = useState(() => 
      {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
     });

   const [taskCount, setTaskCount] = useState(taskItems.length);

  // Update localStorage whenever taskItems change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
    setTaskCount(taskItems.length);
  }, [taskItems]);
/********************************************************* */
  const addToTask = (task) => {
    const updatedTasks = [...taskItems, task];
    setTaskItems(updatedTasks);
  };

  const removeFromTask = (index) => {
    const updatedTasks = taskItems.filter((_, i) => i !== index);
    setTaskItems(updatedTasks);
  };
/********************************************************* */
  return (
    <TaskContext.Provider value={{ 
      taskItems, 
      taskCount, 
      addToTask, 
      removeFromTask 
      }}>
      <div class="mx-auto p-5">
        <h2 class="font-monospace text-decoration-underline fw-bold custom">To DO APP</h2>
        <Tasks />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
