import {FiMail, FiLock, FiUser} from "react-icons/fi"
import {Container, Forme, Background} from "./styles"

import{Input} from "../../components/Input"
import{Button} from "../../components/Button"
import { Link } from "react-router-dom"

export function Signup(){
  return(
    <Container>
      <Background/>
      <Forme>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />

        <Input
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button title="Cadastrar"/>

        <Link to='/'>Voltar para o login</Link>
      </Forme>

      

    </Container>
  )
}