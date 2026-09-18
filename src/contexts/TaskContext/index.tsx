import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TasksContextProviderProps = {
  children: ReactNode
}

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