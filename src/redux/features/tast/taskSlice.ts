import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      description: "hhhhh",
      dueDate: "Wed Jan 15 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
      id: "R7JNMHxsacEL70uWdWrJ_",
      isCompleted: false,
      priority: "medium",
      title: "hhhh",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else {
    return state.todo.tasks;
  }

  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;
