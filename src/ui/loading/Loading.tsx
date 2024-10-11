import { FC } from 'react'
import styles from './Loading.module.scss'
import { Spinner } from '@chakra-ui/react'

const Loading: FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='green.500'
          size='xl'
        />
      </div>
    </div>
  )
}

export default Loading
