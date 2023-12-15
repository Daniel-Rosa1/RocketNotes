import { useState } from "react"
import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"
import {Container, Form, Avatar} from "./styles"

import {useAuth} from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


import{Input} from "../../components/Input"
import{Button} from "../../components/Button"
import{ButtonText} from "../../components/ButtonText"

import { useNavigate } from "react-router-dom";


export function Profile(){
  const {user, updateProfile} = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign( user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleBack(){
    navigate(-1)
  }

  async function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>

      <header>
        <ButtonText/>
        <button type="button/" onClick={handleBack}>
          <FiArrowLeft/>
        </button>
      </header>
    
     <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <Input
          placeholder="nome"
          icon={FiUser}
          type="text"
          value = {name}
          onChange = {e =>setName(e.target.value)}
        />
        
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          value = {email}
          onChange = {e =>setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
          onChange = {e =>setOldPassword(e.target.value)}
          />
        
        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
          onChange = {e =>setNewPassword(e.target.value)}
          />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>

    </Container>
  )
}