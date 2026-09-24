import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { Footer } from "../Footer";
import { useRef} from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const {state, setState} = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const NextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        if(taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim()

        if(!taskName) {
            alert('Digite o nome da tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[NextCycleType],
            type: NextCycleType
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [
                    ...prevState.tasks, newTask
                ],

            }

        })
    }

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        e.preventDefault()

        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
            }

        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput 
                labelText='task' 
                id='meuInput' 
                type='text'
                placeholder='Digite algo'
                ref={taskNameInput}
                disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>O proximo intervalo é de 25min</p>
            </div>  

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                    <DefaultButton 
                        aria-label="Iniciar nova tarefa" title="iniciar nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                    />
                )} 
                
                {!!state.activeTask && (
                    <DefaultButton
                        aria-label="Interromper tarefa atual" title="Interromper tarefa atual"
                        type="button"
                        color='red'
                        icon={<StopCircleIcon />}
                        onClick={handleInterruptTask}
                    />
                )}
            </div>

            <div>
                <Footer />
            </div>

        </form>
    )
}