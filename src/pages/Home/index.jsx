import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li>
                    <ButtonText title='Todos' $isactive/>
                </li>
                <li>
                    <ButtonText title='react'/>
                </li>
                <li>
                    <ButtonText title='node'/>
                </li>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote></NewNote>

        </Container>
    )
}