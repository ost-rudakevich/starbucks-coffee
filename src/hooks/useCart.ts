import { useMemo } from 'react'
import { useAppSelector } from './redux-hooks'

export const useCart = () => {
  const cartList = useAppSelector(state => state.cart.cartList)

  const totalPrice = useMemo(
    () =>
      cartList.reduce(
        (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
        0
      ),
    [cartList]
  )

  return { cartList, totalPrice }
}
