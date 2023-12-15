import {useState} from "react"
import {Container, Form} from "./styles"


import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Noteitem} from "../../components/Noteitem"
import {Section} from "../../components/Section"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New(){
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")
  
  const [tags, setTags] = useState([])
  const [newtag, setNewtag] = useState("")

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink ])
    setNewLink("")
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newtag])
    setNewtag("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter( link => link !== deleted))
  }

  function handleRemoveTag(deleted){
    setTags( prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota")
    }

    if(newLink){
      return alert("Link ainda não adicionado, clique em adicionar ou deixe o campo em braco")
    }

    if(newtag){
      return alert("tag ainda não adicionado, clique em adicionar ou deixe o campo em braco")
    }
    
    api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert("nota criada com sucesso!")
    navigate(-1)
  }
    

  return(
    <Container>
      <Header/>
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title={"Voltar"}
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Titulo"
            onChange = {e => setTitle(e.target.value)}
            value ={ title} 
          />

          <Textarea 
            placeholder="Observações"
            onChange = {e => setDescription( e.target.value)}
            
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <Noteitem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
               />
              ))
            }

            <Noteitem
              isNew 
              placeholder="Novo link"
              value={newLink}
              onChange = {e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) =>(
                  <Noteitem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <Noteitem
               isNew
               placeholder="Nova tag"
               value={newtag}
               onChange = {e => setNewtag(e.target.value)}
               onClick={handleAddTag}
              />
            </div>

          </Section>

          <Button 
            title={"Salvar"}
            onClick = {handleNewNote}
          />

        </Form>
      </main>

    </Container>
  )
}