import { FC, useState } from 'react'
import styles from './Cart.module.scss'
import CartList from './cart-list/CartList'
import { useCart } from 'hooks/useCart'

const Cart: FC = () => {
  const { cartList } = useCart()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles['wrapper-cart']}>
      <button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.badge}>
          {cartList.length < 100 ? cartList.length : '>'}
        </span>
        <span className={styles.text}>MY BASKET</span>
      </button>
      <CartList isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Cart
