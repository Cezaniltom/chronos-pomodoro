import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { Footer } from "../Footer";
import { useRef, useState } from "react";

export function MainForm() {
    const [taskName, setTaskName] = useState('')
    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('Deu certo')
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