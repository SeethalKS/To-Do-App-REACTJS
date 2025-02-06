import { createContext } from "react";

// Create Context
const params = {
  taskItems: [],
  taskCount: [],
  addToTask: [],
  removeFromTask: [],
};
const TaskContext = createContext(params);
export default TaskContext;