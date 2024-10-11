import { FC } from 'react'
import styles from './CarouselButton.module.scss'
import { ICarouselButtonProps } from './carousel-button.interface'
import { useAppDispatch } from 'hooks/redux-hooks'
import { addProductToCart } from 'state/cart-slice/cartSlice'

const CarouselButton: FC<ICarouselButtonProps> = ({
  product,
  selectedImage,
  selectedVariations,
  setIsSize
}) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className={styles.add}
      onClick={() => {
        if (selectedVariations.selectedSize !== '') {
          setIsSize(false)
          dispatch(
            addProductToCart({
              product: product,
              selectedImage: selectedImage,
              quantity: 1,
              selectedVariations: selectedVariations
            })
          )
        } else {
          setIsSize(true)
        }
      }}
    >
      ADD TO BASKET
    </button>
  )
}

export default CarouselButton
