import { useState } from "react"
import {FiMail, FiLock} from "react-icons/fi"
import {Container, Forme, Background} from "./styles"

import {useAuth}  from "../../hooks/auth"

import { Link } from "react-router-dom"
import{Input} from "../../components/Input"
import{Button} from "../../components/Button"

export function Signin(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }
 

  return(
    <Container>
      <Forme>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          type="text"
          placeholder="E-mail"
          onChange = {e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="register"> Criar conta</Link>
      </Forme>

      <Background/>

    </Container>
  )
}