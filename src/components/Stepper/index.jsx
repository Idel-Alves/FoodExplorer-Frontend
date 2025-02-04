import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export const Stepper = () => {
  
  return (
    <Container>
      <button >
        <FiMinus size={25} />
      </button>

      <span>1</span>

      <button >
        <FiPlus size={25} />
      </button>
    </Container>
  )
}