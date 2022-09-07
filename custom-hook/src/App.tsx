import React, { useEffect, useState } from "react";
import "./App.css";
import BackwardCounter from "./components/counter/BackwardCounter";
import ForwardCounter from "./components/counter/ForwardCounter";
import NewTask from "./components/NewTask/NewTask";
import Tasks, { Task } from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: "http://localhost:3000/tasks",
        method: "GET",
        headers: {},
        body: null,
      },
      (data) => {
        console.log(data);
        setTasks(data as Task[]);
      }
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    console.log("add task handler");
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
