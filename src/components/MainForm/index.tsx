import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";

export function MainForm() {
    return <form className='form' action="">
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
        <p>Lorem ipsum dolor sit amet.</p>
        </div>  

        <div className="formRow">
        <Cycles />
        </div>

        <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color='green'/>
        <DefaultButton icon={<StopCircleIcon />} color='red'/>
        </div>

        </form>
}