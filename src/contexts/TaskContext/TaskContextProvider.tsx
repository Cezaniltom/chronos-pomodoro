import { useEffect, useReducer, type ReactNode } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"

type TasksContextProviderProps = {
  children: ReactNode
}

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer,initialTaskState)

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage(e => {
    const countDownSeconds = e.data
    console.log(countDownSeconds)

    if(countDownSeconds <= 0) {
      console.log('worker COMPLETED')
      worker.terminate()
    }
})

  useEffect(() => {
    if(!state.activeTask) {
      console.log('Worker terminado por falta de activeTask')
      worker.terminate()
    }

    worker.postMessage(state)
  }, [worker, state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
)}