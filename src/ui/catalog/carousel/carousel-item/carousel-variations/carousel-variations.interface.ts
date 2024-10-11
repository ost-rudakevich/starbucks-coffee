import { IVariationsSelectedData } from 'types/cart.interface'
import { IVariations, INutritionalInfo } from 'types/product.interface'

export interface ICarouselVariationsProps {
  isActive: boolean
  nutrients: INutritionalInfo[]
  variants: IVariations[]
  selectedVariations: IVariationsSelectedData
  useSelectedVariations: React.Dispatch<
    React.SetStateAction<IVariationsSelectedData>
  >
}
