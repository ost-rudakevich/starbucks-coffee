import { FC } from 'react'
import styles from './CarouselTitle.module.scss'
import { ICarouselTitleProps } from './carousel-title.interface'
import IndicatorPlank from './indicator-plank/IndicatorPlank'
import { NavLink, useLocation } from 'react-router-dom'

const CarouselTitle: FC<ICarouselTitleProps> = ({
  isActive,
  selectedImage,
  images,
  name,
  slug
}) => {
  const { pathname } = useLocation()
  return (
    <>
      {!isActive ? (
        <div className={styles.title}>
          <div className={styles.box}>
            <img src={selectedImage} alt='' />
          </div>
          <span className={styles.name}>{name}</span>
        </div>
      ) : (
        <NavLink to={`${pathname}/${slug}`}>
          <div className={styles['title-active']}>
            <div className={styles.box}>
              <img src={selectedImage} alt='' />
            </div>

            <IndicatorPlank
              selectedImage={selectedImage}
              carouselImages={images}
            />

            <span className={styles['name-active']}>{name}</span>
          </div>
        </NavLink>
      )}
    </>
  )
}

export default CarouselTitle
