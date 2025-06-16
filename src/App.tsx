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
}