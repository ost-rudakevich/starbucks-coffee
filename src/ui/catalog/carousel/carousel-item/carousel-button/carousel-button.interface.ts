import { IVariationsSelectedData } from 'types/cart.interface'
import { IProduct } from 'types/product.interface'

export interface ICarouselButtonProps {
  product: IProduct
  selectedImage: string
  selectedVariations: IVariationsSelectedData
  setIsSize: React.Dispatch<React.SetStateAction<boolean>>
}
