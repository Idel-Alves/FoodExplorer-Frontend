import { useState } from "react";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import LogoExplorer from "../../assets/logo-explorer-.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
 
  const {signIn} = useAuth();

  function handleSignIn(event) {
    event.preventDefault();
    setIsLoading(true)
    signIn({ email, password })
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível o sign in")
        }
      })
  }

    return (
        <Container>
          <div className="header">
            <img src={LogoExplorer} alt="logo explorer" />
            <h1>food explorer</h1>
          </div>
    
          <Form onSubmit={handleSignIn}>
            <h1>Faça login</h1>
    
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
    
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
    
            <Button
              type="submit"
              title={isLoading ? "Carregando..." : "Entrar"}
              disabled={isLoading}
            />
    
            <Link className="register" to="/register">
              Criar uma conta
            </Link>
          </Form>
        </Container>
      )
}