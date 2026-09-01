<<<<<<< HEAD
import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'

export function App() {
    console.log('Hello World')

    return (
        <>
            <Heading>Olá Mundo 1</Heading>
            <Heading>Olá Mundo 2</Heading>
            <Heading>Olá Mundo 3</Heading>
            <Heading>Olá Mundo 4</Heading>
            <p>Hello World</p>
            <p>Hello World 2</p>
        </>
    )
=======
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'


export function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
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
      </Container>
    </>
  )
>>>>>>> developer
}