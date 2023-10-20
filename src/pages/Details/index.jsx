import { Fragment } from 'react'
import { Container, Links } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {
  return (
    <Fragment>
     <Container>
        <Header />

        <Section title="Links Utéis">
        {/* Children passa no meio do componente não como propriedade */}
          <Links>
              <li>
                <a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a>
              </li>
          </Links>
        </Section>

        <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
        </Section>

        <Button title="Voltar"/>

      </Container>
    </Fragment>
  )
}