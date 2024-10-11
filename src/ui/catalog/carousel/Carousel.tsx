import { FC } from 'react'
import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { useGetProductByCategoryQuery } from 'state/product-api/productApi'
import { useLocation } from 'react-router-dom'
import Error from 'ui/error/Error'
import Loading from 'ui/loading/Loading'

const Carousel: FC = () => {
  const { pathname } = useLocation()
  const { data, error, isLoading } = useGetProductByCategoryQuery(pathname)

  if (isLoading) {
    return <Loading />
  }

  if (error || data === undefined) {
    return <Error />
  }

  return (
    <div className={styles.carousel}>
      {data.map(product => {
        return <CarouselItem product={product} key={product.slug} />
      })}
    </div>
  )
}

export default Carousel
