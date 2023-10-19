import { Fragment } from 'react'
import { Container } from './styles'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Fragment>
     <Container>
        <h1>hello vivi</h1>
        <p>hello darkness</p>

        <Button title="Login" loading/>

        <Button title="cadastrar"/>

        <Button title="fechar"/>

      </Container>
    </Fragment>
  )
}