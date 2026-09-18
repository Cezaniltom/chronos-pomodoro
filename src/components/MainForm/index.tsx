import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { Footer } from "../Footer";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {

    const { setState } = useTaskContext()

    function handleClick() {
        setState(prevState => {
            return {
                ...prevState,
                formattedSecondsRemaining: '21:00',
            }  
        })
    }

    return (
        <form className='form' action="">

            <button onClick={handleClick} type="button">Alterar tempo</button>
            <div className="formRow">
                <DefaultInput 
                labelText='task' 
                id='meuInput' 
                type='text'
                placeholder='Digite algo'
                defaultValue='Valor preenchido'
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
                <DefaultButton icon={<StopCircleIcon />} color='red'/>
            </div>

            <div>
                <Footer />
            </div>

        </form>
    )
}