import { FC } from 'react'
import styles from './Poster.module.scss'

const Poster: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.poster} src='/poster.png' alt='poster' />
    </div>
  )
}

export default Poster
