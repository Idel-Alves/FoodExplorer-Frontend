import { FiSearch, FiLogOut, FiMenu, FiPlusCircle, FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import { DishCount } from "../DishCount";

import Receipt from "../../assets/receipt.svg";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ search }) {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/")
    signOut()
  };

  function handleNewDish() {
    navigate("/new")
  };

  return (
    <Container>
      <FiMenu size={32} className="menu-mobile" onClick={() => setMenuIsVisible(true)} />
      <BurgerMenu
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        onClick={() => setMenuIsVisible(false)}
        search={search}
      />

      <Logo />

      <div className="search">
        <Input
          icon={FiSearch}
          placeholder="Pesquise por pratos"
          onChange={(e) => search(e.target.value)}
        />
      </div>

      <nav>
        <ul>
          <li>
           {user.isAdmin === "false" ?
            <Link to="/favorites">
              Meus Favoritos
            </Link>
            : null}
          </li>
        </ul>
      </nav>

      {user.isAdmin === "true" ?
        <Button className="btn-new"
          icon={FiPlusCircle}
          title="Novo Prato"
          onClick={handleNewDish}
        /> : 
        <Button
          className="btn-cart"
          icon={FiShoppingCart}
          title={"Pedidos (0)"}
          />
        }

      <Link to="/profile">
        <img src={avatarURL} className="profile" alt="Profile image" />
      </Link>

      <button onClick={handleSignOut} className="logout">
        <FiLogOut />
      </button>

      <div className="cart-mobile">{user.isAdmin === "true" ? null : <DishCount />}</div>  

    </Container>
  )
}