import { FC, useState } from 'react'
import styles from './CarouselItem.module.scss'
import { IProduct } from 'types/product.interface'
import cn from 'clsx'
import CarouselTitle from './carousel-title/CarouselTitle'
import CarouselVariations from './carousel-variations/CarouselVariations'
import { IVariationsSelectedData } from 'types/cart.interface'
import { getImageForSize } from 'utils/get-image-for-size/getImageForSize'
import CarouselButton from './carousel-button/CarouselButton'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isSize, setIsSize] = useState<boolean>(false)

  const [selectedVariations, useSelectedVariations] =
    useState<IVariationsSelectedData>({
      selectedSize: '',
      selectedMilk: '',
      selectedTopping: ''
    })

  const selectedImage = getImageForSize(
    selectedVariations.selectedSize,
    product.images
  )

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={cn(styles.item, {
        [styles.active]: isActive
      })}
    >
      <CarouselTitle
        isActive={isActive}
        selectedImage={selectedImage}
        images={product.images}
        name={product.name}
        slug={product.slug}
      />

      <CarouselVariations
        isActive={isActive}
        nutrients={product.nutritionalInfo}
        variants={product.variations}
        selectedVariations={selectedVariations}
        useSelectedVariations={useSelectedVariations}
      />

      {isActive && (
        <CarouselButton
          product={product}
          selectedImage={selectedImage}
          selectedVariations={selectedVariations}
          setIsSize={setIsSize}
        />
      )}

      {isActive && isSize ? (
        <span className={styles['not-size']}>Please select a size.</span>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CarouselItem
