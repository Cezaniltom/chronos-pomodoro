import React, { createContext, useContext, type ReactNode } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TasksContextProps = {
  state: TaskStateModel
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

type TasksContextProviderProps = {
  children: ReactNode
}

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}

const initialContextValue = {
  state: initialState,
  setState: () => {},
}

export const TaskContext = createContext<TasksContextProps>(initialContextValue)

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  return <TaskContext.Provider value={initialContextValue}>{children}</TaskContext.Provider>
}

export function useTaskContext() {
  return useContext(TaskContext)
}