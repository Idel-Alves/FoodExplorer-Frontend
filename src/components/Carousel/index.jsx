import { Container } from "./styles";
import CardCarousel from "./components/CardCarousel";

export function Carousel({ meals, desserts, drinks }) {
  const isSearchEmpty = meals.length === 0 && desserts.length === 0 && drinks.length === 0

  return (
    <Container>
      {!isSearchEmpty && meals.length > 0 && <CardCarousel dishes={meals} title="Refeições" />}
      {!isSearchEmpty && desserts.length > 0 && <CardCarousel dishes={desserts} title="Sobremesas" />}
      {!isSearchEmpty && drinks.length > 0 && <CardCarousel dishes={drinks} title="Bebidas" />}
    </Container>
  )
}