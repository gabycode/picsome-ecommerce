import { useContext, useState } from "react";
import { Context } from "./Context";

function Image({ className, img }) {
  const { toggleFavorite } = useContext(Context);
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

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <img src={img.url} className="image-grid" />
      {img.isFavorite ? heartFillIcon : heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
