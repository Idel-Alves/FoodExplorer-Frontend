import { Container, Footer } from "./styles";

import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import Logo from "../../assets/logo-gray.svg";
import { Carousel } from "../../components/Carousel";

import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const meals = dishes.filter((dish) => dish.category === "meals");
  const desserts = dishes.filter((dish) => dish.category === "desserts");
  const drinks = dishes.filter((dish) => dish.category === "drinks");

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?search=${search}`);
        const fetchedDishes = response.data;
        
        setDishes(fetchedDishes);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }
  
    fetchDishes();
  }, [search]);

  return (
   
    <Container>
       
      <Header search={setSearch} />

      <main>
        <Hero className="front-cover" />
        <div className="carousels">
          <Carousel meals={meals} desserts={desserts} drinks={drinks} />
        </div>
      </main>

      <Footer>
        <div className="logo">
          <img src={Logo} alt="Logo explorer" />
          <h1>food explorer</h1>
        </div>
        <p>© 2025 - All rights reserved.</p>
      </Footer>
    </Container>
  )
}