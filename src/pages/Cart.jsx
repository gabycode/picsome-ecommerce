import { useContext, useState } from "react";
import { Context } from "../components/Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const cartItemsCost = cartItems.length * 5.99;
  const totalCostOfCart = cartItemsCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
      console.log("order placed!");
    }, 3000);
  }

  return (
    <div className="cart-page">
      <h1>Checkout</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostOfCart}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
}
export default Cart;
