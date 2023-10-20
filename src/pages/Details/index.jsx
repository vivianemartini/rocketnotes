import { Fragment } from 'react'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

export function Details() {
  return (
    <Fragment>
     <Container>
        <Header />
        <Button title="Voltar"/>

      </Container>
    </Fragment>
  )
}