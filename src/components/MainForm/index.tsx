import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { Footer } from "../Footer";
import { useRef} from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
    const {setState} = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

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
            duration: 1,
            type: "workTime"
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
                tasks: [
                    ...prevState.tasks, newTask
                ],

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
                />
            </div>

            <div className="formRow">
                <p>O proximo intervalo é de 25min</p>
            </div>  

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green'/>
                {/* <DefaultButton icon={<StopCircleIcon />} color='red'/> */}
            </div>

            <div>
                <Footer />
            </div>

        </form>
    )
}