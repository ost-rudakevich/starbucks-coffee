import { IProduct } from 'types/product.interface'

export interface ICarouselTitleProps
  extends Pick<IProduct, 'images' | 'slug' | 'name'> {
  isActive: boolean
  selectedImage: string
}
