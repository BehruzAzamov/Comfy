import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

function CartTotals() {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState)
    return (
        <div className='card bg-base-200'>
            <div className="card-body">
                <p className="flex justify-between text-xl border-b border-base-300 pb-2">
                    <span>Subtotal</span>
                    <span className='font-medium'>{formatPrice(cartTotal)}</span>
                </p>
                <p className="flex justify-between text-xl border-b border-base-300 pb-2">
                    <span>Shipping</span>
                    <span className='font-medium'>{formatPrice(shipping)}</span>
                </p>
                <p className="flex justify-between text-xl border-b border-base-300 pb-2">
                    <span>OrderTotal</span>
                    <span className='font-medium'>{formatPrice(orderTotal)}</span>
                </p>
            </div>
        </div>
    )
}

export default CartTotals