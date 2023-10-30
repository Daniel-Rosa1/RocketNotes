import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"
import {Container, Form, Avatar} from "./styles"

import { Link } from "react-router-dom";
import{Input} from "../../components/Input"
import{Button} from "../../components/Button"

export function Profile(){
  return(
    <Container>

      <header>
        <Link to='/'>
          <FiArrowLeft/>
        </Link>
      </header>
    
     <Form>
        <Avatar>
          <img
            src="https://github.com/Daniel-Rosa1.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file"/>
          </label>
        </Avatar>

        <Input
          placeholder="nome"
          icon={FiUser}
          type="text"
        />
        
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
          />
        
        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
          />

        <Button title="Salvar"/>
      </Form>

    </Container>
  )
}