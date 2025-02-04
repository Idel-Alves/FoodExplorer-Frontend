import { FiHeart, FiEdit, FiChevronRight } from "react-icons/fi";
import { SwiperSlide } from "swiper/react";

import { useAuth } from "../../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../../hooks/favorite";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";

import Slider from "../../Slider";
import { Stepper } from "../../Stepper";
import { Button } from "../../Button";

import imagePlaceholder from "../../../assets/image_placeholder.svg";

const settings = {
  spaceBetween: 27,
  navigation: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1143: {
      slidesPerView: 3,
    },
  },
};

const CardCarousel = ({ dishes, title }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addFavorite, isFavorite } = useFavorite()
  const handleAddFavorite = (dish) => {
    addFavorite(dish);
  }

  return (
    <Slider title={title} settings={settings}>
      {dishes.map((dish, index) => {
        const imageURL = dish.image
          ? `${api.defaults.baseURL}/files/${dish.image}`
          : imagePlaceholder;
        const isDishFavorite = isFavorite(dish);
        return (

          <SwiperSlide key={index}>
            {user.isAdmin === "true" ? (
              <Link className="edit" to={`/edit/${dish.id}`}>
                <FiEdit />
              </Link>
            ) : (
              <button className="favorite" onClick={() => handleAddFavorite(dish)}>
                <FiHeart color={isDishFavorite ? "red" : "white"} />
              </button>
            )}

            <Link to={`/details/${dish.id}`}>
              <img src={imageURL} alt={dish.title} />
              <h2>{dish.title} <FiChevronRight /> </h2>
            </Link>

            <p>{dish.description}</p>
            <span>R$ {dish.price}</span>

            <div className="btns">
              {user.isAdmin === "false" ? <Stepper
                initialQuantity={1}
                onDecrement={-1}
                onIncrement={1}
              /> : null}
              {user.isAdmin === "false" ?
                <Button className="include" title="Incluir" />
                :
                null}
            </div>

          </SwiperSlide>
        )
      })}
    </Slider>
  );
};

export default CardCarousel;
