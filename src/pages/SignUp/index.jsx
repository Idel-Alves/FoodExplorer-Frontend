import { useState } from "react";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

  import { api } from "../../services/api";

import LogoExplorer from "../../assets/logo-explorer-.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault()

    setIsCreating(false)
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (password.length < 6) {
      setIsCreating(false)
      return alert("A senha deve conter pelo menos 6 caracteres!")
    }

    setIsCreating(true)

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error =>{
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar")
      }
    });
  }

    return (
        <Container>
          <div className="header">
            <img src={LogoExplorer} alt="logo explorer" />
            <h1>food explorer</h1>
          </div>
    
          <Form onSubmit={handleSignUp}>
            <h1>Crie sua conta</h1>

            <label htmlFor="name">Seu nome</label>
            <Input 
              placeholder="Exemplo: Maria da Silva"
              type="text"
              onChange={e => setName(e.target.value)}
            />
    
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
               type="text"
               onChange={e => setEmail(e.target.value)}
            />
    
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
    
            <Button
              type="submit"
              title={isCreating ? "Criando" : "Criar conta"}
              disabled={isCreating}
            />
    
            <Link to="/">
              Já tenho uma conta
            </Link>
          </Form>
        </Container>
      )
}