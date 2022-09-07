import { RequestConfig } from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

export interface Task {
  id: string;
  text: string;
}

const Tasks: React.FC<{
  items: Task[];
  error: string | null;
  loading: boolean;
  onFetch: (
    requestConfig: RequestConfig,
    applyData: (data: Object) => void
  ) => Promise<void>;
}> = ({ items, error, loading, onFetch }) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (error) {
    content = <button onClick={(_) => onFetch}>Try again</button>;
  }

  if (loading) {
    content = <p>"Loading tasks..."</p>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
