import { Container } from "./styles";
import Receipt from "../../assets/receipt.svg";

export function DishCount() {
  return (
    <Container>
      <img src={Receipt} />
      <div className="circle">
        <span>0</span>
      </div>
    </Container>
  )
}