import { useContext, useState } from "react";
import { Context } from "./Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const { toggleFavorite, cartItems, addToCart, removeFromCart } =
    useContext(Context);
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}></i>
  );

  const heartFillIcon = (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}></i>
  );

  function cartIcons() {
    const inCart = cartItems.some((item) => item.id === img.id);
    if (inCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => {
            addToCart(img);
          }}></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <img src={img.url} className="image-grid" />

      {img.isFavorite ? heartFillIcon : heartIcon}
      {cartIcons()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Image;
