import { FC } from 'react'
import styles from './ProductDetails.module.scss'
import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from 'state/product-api/productApi'
import Loading from 'ui/loading/Loading'
import Error from 'ui/error/Error'
import { formatToCurrency } from 'utils/format-to-currency'

const ProductDetails: FC = () => {
  const { category, slug } = useParams()

  const { data, error, isLoading } = useGetProductBySlugQuery({
    category: category || '',
    slug: slug || ''
  })

  if (isLoading) {
    return <Loading />
  }

  if (error || data === undefined) {
    return <Error />
  }

  if (data.length > 0) {
    const currentProduct = data[0]
    return (
      <main className={styles['product-details']}>
        <div className={styles.wrapper}>
          <h1>{currentProduct.name}</h1>

          <div className={styles.info}>
            <div>
              <span>Price:</span>
              <span>{formatToCurrency(currentProduct.price, 'USD')}</span>
            </div>
            {currentProduct.nutritionalInfo.map(item => (
              <div key={item.name}>
                <span>{item.name}:</span>
                <span>{item.grams}</span>
              </div>
            ))}

            <div>
              <span>Calories:</span>
              <span>{currentProduct.calories}</span>
            </div>

            <div className={styles.size}>
              {currentProduct.variations.map(size => (
                <div key={size.name} className={styles.column}>
                  <span>{size.name}:</span>
                  <div key={size.name} className={styles['size-item']}>
                    {size.variants.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <img src={currentProduct.images[1]} alt='' className={styles.two} />
        </div>
      </main>
    )
  }

  return <Error />
}

export default ProductDetails
