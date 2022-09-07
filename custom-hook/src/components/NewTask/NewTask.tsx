import useHttp from "../../hooks/use-http";
import { Task } from "../Tasks/Tasks";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask: React.FC<{ onAddTask: (task: Task) => void }> = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: any) => {
    const id = taskData.id; // firebase-specific => "name" contains generated id
    const createdTask = { id, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    sendTaskRequest(
      {
        url: "http://localhost:3000/tasks",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data: Object) => createTask(taskText, data)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
