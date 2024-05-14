import { useSelector } from "react-redux"
import { CartItemsList, CartTotals } from "../components"
import { Link } from "react-router-dom"

const Cart = () => {

  const user = null
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  if (numItemsInCart === 0) {
    return <h2 className="text-5xl font-bold border-b border-solid py-4">Your cart is empty</h2>
  }
  console.log(numItemsInCart);
  return (
    <div className="align-element">
      <div className="lg:col-span">
        <CartItemsList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals /> {user ?
          <Link className="btn btn-primary btn-block mt-8" to='./checkout'>Procced to checkout</Link> :
          <Link className="btn btn-primary btn-block mt-8" to='./login'>Please login </Link>}
      </div>
    </div>
  )
}

export default Cart