import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  ICartInitialState,
  IAddProductToCartPayload,
  IChangeQuantityPayload
} from './cart-slice.interface'
import { nanoid } from 'nanoid'

const initialState: ICartInitialState = {
  cartList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<IAddProductToCartPayload>
    ) => {
      const id = nanoid()

      const { product, selectedVariations } = action.payload

      const inCart = state.cartList.find(
        item =>
          item.product.slug === product.slug &&
          JSON.stringify(item.selectedVariations) ===
            JSON.stringify(selectedVariations)
      )

      if (!inCart) {
        state.cartList.push({ ...action.payload, id })
      } else {
        inCart.quantity = inCart.quantity + 1
      }
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cartList = state.cartList.filter(item => item.id !== action.payload)
    },

    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload
      const item = state.cartList.find(item => item.id === id)
      if (item) {
        type === 'plus' ? item.quantity++ : item.quantity--
      }
    }
  }
})

export default cartSlice.reducer

export const { addProductToCart, removeProductFromCart, changeQuantity } =
  cartSlice.actions

// item.selectedVariations.selectedMilk ===
//           selectedVariations.selectedMilk &&
//         item.selectedVariations.selectedSize ===
//           selectedVariations.selectedSize &&
//         item.selectedVariations.selectedTopping ===
//           selectedVariations.selectedTopping
