import { useEffect, useState } from "react";
import '../ComponentCSS/CartItem.css'
import ItemImg1 from '../Image/itemsList_1.png'

const CartItem = (props) => {
    const [cartItems, setCartItems] = useState([])

    const cartLocal = localStorage.getItem("Cart Item")
    useEffect(() => {
        setCartItems(JSON.parse(cartLocal))
    },[])
    return(
        <>
        <div className="cartitem">
            <img src={props.product.img[0]} alt="" className="CartItemIMG" />
            <h1 className="cartItemName">{props.product.DishName}</h1>
            <h1 className="cartItemPrice">${props.product.DishPrice}</h1>
            <h1 className="cartItemQuantity">
                <h1 className="Plus" onClick={() => {

                }}>+</h1>
                {props.product.quantity}
                <h1 className="Subtract">-</h1>
            </h1>
            <h1 className="cartItemTotal">${}</h1>
            <h1 className="cartItemACtion">X</h1>
          </div>
        </>
    )
}
export default CartItem