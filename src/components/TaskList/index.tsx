import TaskCard from "../TaskCard";
import { useEffect } from "react";
import { fetchTasks } from "../../services/TaskService";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((store) => store.task);
  useEffect(() => {
    dispatch(fetchTasks({}));
  }, [dispatch]);
  console.log("ux file", tasks);
  return (
    <div className="space-y-5 w-[67vw]">
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
