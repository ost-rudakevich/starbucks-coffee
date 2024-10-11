import { FC } from 'react'
import styles from './Catalog.module.scss'
import Carousel from './carousel/Carousel'

const Catalog: FC = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.reward}>
        <img src='/rewards.png' alt='reward' />
      </div>
      <Carousel />
    </div>
  )
}

export default Catalog
