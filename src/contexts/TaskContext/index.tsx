import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TasksContextProps = {
  state: TaskStateModel
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

type TasksContextProviderProps = {
  children: ReactNode
}



const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
}

export const TaskContext = createContext<TasksContextProps>(initialContextValue)

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
)}

export function useTaskContext() {
  return useContext(TaskContext)
}