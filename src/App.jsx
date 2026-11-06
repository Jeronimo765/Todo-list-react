import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: task.title,
      description: task.description,
      status: 'pendiente',
    }])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function updateTask(id, changes) {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, ...changes } : task
    )));
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Mis Tareas</h1>
        <TaskForm createTask={createTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  )
}

export default App