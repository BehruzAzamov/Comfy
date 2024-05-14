import { useSelector } from "react-redux"
import CartItems from "./CartItems"

function CartItemsList() {
    const cartItems = useSelector((state) => state.cartState.cartItems)

    return <div>
        {cartItems.map((item) => {
            return <CartItems key={item.cartID} cartItems={item}/>
         })}
    </div>
}

export default CartItemsList