import { FC } from 'react'
import styles from './IndicatorPlank.module.scss'
import cn from 'clsx'

interface IIndicatorPlankProps {
  carouselImages: string[]
  selectedImage: string
}

const IndicatorPlank: FC<IIndicatorPlankProps> = ({
  carouselImages,
  selectedImage
}) => {
  return (
    <div className={styles.plank}>
      <div className={styles.wrapper}>
        {carouselImages.map(image => {
          return (
            <div
              className={cn(styles.circle, {
                [styles.active]: image === selectedImage
              })}
              key={image}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default IndicatorPlank
