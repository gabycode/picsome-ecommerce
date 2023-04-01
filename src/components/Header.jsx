import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartIcon =
    cartItems.length > 0 ? (
      <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    ) : (
      <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    );

  return (
    <header>
      <h2>
        <Link to="/picsome-ecommerce/">Pic Some</Link>
      </h2>
      <Link to="/cart">{cartIcon}</Link>
    </header>
  );
}

export default Header;
