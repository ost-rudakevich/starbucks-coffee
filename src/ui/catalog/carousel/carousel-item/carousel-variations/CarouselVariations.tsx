import { FC } from 'react'
import styles from './CarouselVariations.module.scss'
import { ICarouselVariationsProps } from './carousel-variations.interface'
import { Select } from '@chakra-ui/react'

const CarouselVariations: FC<ICarouselVariationsProps> = ({
  isActive,
  nutrients,
  variants,
  selectedVariations,
  useSelectedVariations
}) => {
  return (
    <>
      {!isActive ? (
        <div className={styles.nutrients}>
          <span>Calories:</span>
          {nutrients.map(nutrient => {
            return (
              <div key={nutrient.name} className={styles.calories}>
                <span>{nutrient.name}:</span>
                <span>{nutrient.grams}</span>
              </div>
            )
          })}
        </div>
      ) : (
        <div className={styles.variants}>
          {variants.map(variant => {
            return (
              <div className={styles['select-wrapper']} key={variant.name}>
                <span className={styles.name}>{variant.name}</span>
                <Select
                  disabled={variant.variants.length <= 0}
                  variant='unstyled'
                  fontSize='sm'
                  letterSpacing='initial'
                  color='white'
                  textAlign='right'
                  placeholder={`Select a ${variant.name}`}
                  cursor='pointer'
                  onChange={e =>
                    useSelectedVariations(prevState => ({
                      ...prevState,
                      [`selected${variant.name}`]: e.target.value
                    }))
                  }
                  value={selectedVariations[`selected${variant.name}`]}
                >
                  {variant.variants.map(item => {
                    return (
                      <option className={styles.option} key={item}>
                        {item}
                      </option>
                    )
                  })}
                </Select>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CarouselVariations
