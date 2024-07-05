import { useEffect, useState } from "react";
import '../ComponentCSS/CartSubtotal.css'

const Subtotal = () => {
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        const storagedLocalCart = localStorage.getItem("Cart Item")
        setCartItem(JSON.parse(storagedLocalCart));
        console.log(cartItem);
    }, [])
    // console.log(cartItem);
    const PriceList = []
    cartItem.map((x) => {
        PriceList.push(x.DishPrice*x.quantity)
    })
    const sumPrice = PriceList.reduce((accumulator, currentvalue) => accumulator + currentvalue,0)
    return (
        <>
        <div className="Subtotal">
            <h1 className="SubtotalTitle">CART SUBTOTAL</h1>
            <div className="OrderTotal">
                <h1 className="OTLeft its">Order Subtotal</h1>
                <h1 className="OTPrice its">${sumPrice}</h1>
            </div>
            <div className="Shipping">
                <h1 className="SLeft its">Shipping</h1>
                <h1 className="SPrice its">$0</h1>
            </div>
            <div className="Voucher">
                <h1 className="VLeft its">Voucher</h1>
                <h1 className="VPrice its">$10</h1>
            </div>
            <div className="EndTotal">
                <h1 className="ETLeft its">Total</h1>
                <h1 className="ETPrice its">${sumPrice - 10}</h1>
            </div>
            <button className="completeOrder">Proceed To Checkout</button>
        </div>
        </>
    )
}

export default Subtotal