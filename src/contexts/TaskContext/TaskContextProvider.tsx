import { useEffect, useState, type ReactNode } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

type TasksContextProviderProps = {
  children: ReactNode
}

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
)}