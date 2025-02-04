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
 
  const {signIn} = useAuth();

  function handleSignIn(event) {
    event.preventDefault();
    signIn({email, password});
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
              title={"Entrar"}
            />
    
            <Link className="register" to="/register">
              Criar uma conta
            </Link>
          </Form>
        </Container>
      )
}