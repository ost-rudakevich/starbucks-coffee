import { TSizesData } from 'types/product.interface'

export type TGetImageForSize = (
  selectedSize: TSizesData,
  imageArray: string[]
) => string
