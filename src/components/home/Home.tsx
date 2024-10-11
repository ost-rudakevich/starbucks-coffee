import { FC } from 'react'
import styles from './Home.module.scss'
import Slogan from './slogan/Slogan'
import Poster from './poster/Poster'

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Slogan />
      <Poster />
    </div>
  )
}

export default Home
