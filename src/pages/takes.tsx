import AddTaskModel from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateFilter } from "@/redux/features/tast/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Takes() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);
  // const filter = useAppSelector((state) => selectFilter);

  const dispatch = useAppDispatch();
  return (
    <div className="mx-auto max-w-7xl px-5 mt-28">
      <div className=" flex justify-end items-center gap-3">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
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
