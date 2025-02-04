import { Container } from "./styles";

import Background from  "../../assets/background.jpg";

export function Hero() {
  return (
    <Container>
      <img src={Background} alt="Banner de apresentação da casa" />

      <div>
        <h2>Sabores incomparáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}