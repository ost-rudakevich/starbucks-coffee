import { SIZE_DATA } from 'utils/data/product-size.data'
import { TGetImageForSize } from './get-image-for-size.type'

export const getImageForSize: TGetImageForSize = (selectedSize, imageArray) => {
  if (selectedSize === '') {
    return imageArray[1]
  }

  const matchingImage = imageArray.find(item =>
    item.includes(SIZE_DATA[selectedSize])
  )

  return matchingImage ? matchingImage : imageArray[1]
}
