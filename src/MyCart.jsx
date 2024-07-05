import { useEffect, useState } from "react";
import "./MyCart.css";
import CartBG from "./Image/mycart_bg.png";
import CartItem from "./Component/CartItem";
import ItemImg1 from './Image/itemsList_1.png'
import ItemImg2 from './Image/itemsList_2.png'
import Subtotal from "./Component/CartSubtotal";

const MyCart = () => {
  const [cartItems, setCartItem] = useState([])
  useEffect(() => {
    const cartItemLocl = localStorage.getItem("Cart Item");
    setCartItem(JSON.parse(cartItemLocl));
  }, [])

  return (
    <>
      <div className="PartCart">
        <div className="CartBG">
          <img src={CartBG} alt="" className="CartBGImg" />
          <h1 className="CartBGTitle">My Cart</h1>
        </div>
        <div className="cart1">
          <div className="standardbar">
            <h1 className="sbitem">Product</h1>
            <h1 className="sbitem m-l68">Product Name</h1>
            <h1 className="sbitem ml-90">Unit Price</h1>
            <h1 className="sbitem m-l155">Quantity</h1>
            <h1 className="sbitem m-90">Total</h1>
            <h1 className="sbitem">Action</h1>
          </div>
          {cartItems.map((items) => {
            return <CartItem key = {items.id} product = {items} />
          })}
        </div>
        <div className="Cart-Subtotal">
            <Subtotal />
        </div>
      </div>
    </>
  );
};

export default MyCart;
