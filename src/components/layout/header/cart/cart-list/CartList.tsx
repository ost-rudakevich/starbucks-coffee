import { FC, useRef } from 'react'
import styles from './CartList.module.scss'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import CartItem from '../cart-item/CartItem'
import { ICartListProps } from './cart-list.interface'
import { formatToCurrency } from 'utils/format-to-currency'
import { BsCartXFill } from 'react-icons/bs'
import { useCart } from 'hooks/useCart'

const CartList: FC<ICartListProps> = ({ isOpen, setIsOpen }) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  const { cartList, totalPrice } = useCart()

  return (
    <div className={styles['cart-list']}>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
        size={'xl'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight='500'>My basket</DrawerHeader>

          <DrawerBody marginRight='5px'>
            {cartList.length ? (
              cartList.map(item => {
                return <CartItem {...item} key={item.id} />
              })
            ) : (
              <div className={styles['empty-cart-list']}>
                <BsCartXFill />
                <span>Basket is empty</span>
              </div>
            )}
          </DrawerBody>

          <DrawerFooter
            justifyContent='space-between'
            borderTop='medium'
            borderTopColor='black'
          >
            <div className={styles['cart-footer']}>
              <span>Total:</span>
              <span>{formatToCurrency(totalPrice, 'USD')}</span>
            </div>
            <Button fontWeight='500' colorScheme='green'>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default CartList
