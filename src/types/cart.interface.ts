import { IProduct, TSizesData } from './product.interface'

export interface ICartItem {
  id: string
  product: IProduct
  selectedImage: string
  quantity: number
  selectedVariations: IVariationsSelectedData
}

export interface IVariationsSelectedData {
  selectedSize: TSizesData
  selectedMilk: string
  selectedTopping: string
}
