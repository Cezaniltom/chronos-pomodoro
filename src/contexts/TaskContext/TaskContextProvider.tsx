import { useEffect, useReducer, useState, type ReactNode } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

type TasksContextProviderProps = {
  children: ReactNode
}

export function TaskContextProvider({ children }: TasksContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  type ActionType = {
    type: string
    payload?: number
  }

  const [myState, dispatch] = useReducer((state, action: ActionType) => {
    console.log(state, action)

    switch (action.type) {
      case 'INCREMENT': {
        if(!action.payload) return state;
        return {
          ...state,
          secondsRemaing: state.secondsRemaing + action.payload,
        }
      }
      case 'DECREMENT': {
        if(!action.payload) return state;
        return {
          ...state,
          secondsRemaing: state.secondsRemaing - action.payload,
        }
      }
      case 'RESET': {
        return {
          secondsRemaing: 0,
        }
      }
    }

    return state;
  }, {
    secondsRemaing: 0,
  },)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>INCREMENTAR</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>DECREMENTAR</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
    </TaskContext.Provider>
)}