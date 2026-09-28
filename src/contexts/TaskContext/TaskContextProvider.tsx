import { useEffect, useReducer, type ReactNode } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"

type TasksContextProviderProps = {
  children: ReactNode
}

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer,initialTaskState)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
)}