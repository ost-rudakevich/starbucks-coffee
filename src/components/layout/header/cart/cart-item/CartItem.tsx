import { FC } from 'react'
import styles from './CartItem.module.scss'
import { ICartItem } from 'types/cart.interface'
import { formatToCurrency } from 'utils/format-to-currency'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { useAppDispatch } from 'hooks/redux-hooks'
import {
  changeQuantity,
  removeProductFromCart
} from 'state/cart-slice/cartSlice'

const CartItem: FC<ICartItem> = item => {
  const dispatch = useAppDispatch()

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value: item.quantity,
      min: 1,
      max: 99
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <div className={styles['cart-item']}>
      <div className={styles['item-details']}>
        <img src={item.selectedImage} alt={item.product.slug} />
        <div className={styles.info}>
          <span className={styles.name}>{item.product.name}</span>
          <div className={styles.toppings}>
            <span>{item.selectedVariations.selectedSize}</span>
            <span>{item.selectedVariations.selectedMilk}</span>
            <span>{item.selectedVariations.selectedTopping}</span>
          </div>
        </div>
      </div>

      <HStack maxW='150px'>
        <Button
          onMouseDown={() => null}
          onClick={() => {
            if (item.quantity > 1) {
              dispatch(changeQuantity({ id: item.id, type: 'minus' }))
            }
          }}
          {...dec}
        >
          -
        </Button>
        <Input
          focusBorderColor='green.500'
          paddingX='7px'
          fontSize='15px'
          isReadOnly
          {...input}
        />
        <Button
          onClick={() =>
            dispatch(changeQuantity({ id: item.id, type: 'plus' }))
          }
          {...inc}
        >
          +
        </Button>
      </HStack>

      <span className={styles.price}>
        {formatToCurrency(item.product.price, 'USD')}
      </span>

      <button
        className={styles.remove}
        onClick={() => dispatch(removeProductFromCart(item.id))}
      >
        remove
      </button>
    </div>
  )
}

export default CartItem
