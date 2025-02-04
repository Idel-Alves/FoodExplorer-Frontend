import { FiChevronLeft } from "react-icons/fi";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import { useFavorite } from '../../hooks/favorite';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FavoriteItem } from "../../components/FavoriteItem";

export function Favorites() {
    const { favorites } = useFavorite();
    return (
        <Container>
            <Header />
            {favorites.length > 0 ? (
                <main>
                    <h1>Meus favoritos</h1>
                    <div className="favorites">
                        {favorites.map((dish) => (
                            <FavoriteItem key={dish.id} dish={dish} />
                        ))}
                    </div>
                </main>
            ) : (
                <main>
                    <div className="favorites-empty">
                        <p>
                            Nenhum prato foi adicionado ainda. <br/> Explore nosso cardápio e descubra pratos irresistíveis para adicione aos seus favoritos.
                        </p>

                        <Link to="/">
                            <FiChevronLeft />
                            voltar para a home
                        </Link>
                    </div>
                </main>
            )}
            <Footer />
        </Container>
    )
}