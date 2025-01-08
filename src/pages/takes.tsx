import AddTaskModel from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { useAppSelector } from "@/redux/hook";

export default function Takes() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);
  // const filter = useAppSelector((state) => selectFilter);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-28">
      <div className=" flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModel></AddTaskModel>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
