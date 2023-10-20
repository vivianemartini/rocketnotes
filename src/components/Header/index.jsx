import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
      <Container >
        <Profile>
            <img src="https://github.com/vivianemartini.png" alt="Foto do usuário" />

            <div>
                <span>Bem-vinde</span>
                <strong>Viviane Martini</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine />
        </Logout>
      </Container>
    )
  }
  