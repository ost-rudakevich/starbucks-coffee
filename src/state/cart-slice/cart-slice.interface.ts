import { ICartItem } from 'types/cart.interface'

export interface ICartInitialState {
  cartList: ICartItem[]
}

export interface IAddProductToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload {
  id: string
  type: 'plus' | 'minus'
}
