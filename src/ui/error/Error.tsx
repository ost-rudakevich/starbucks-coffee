import { FC } from 'react'
import styles from './Error.module.scss'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Error: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles['wrapper-error']}>
      <div className={styles.error}>
        <div className={styles.logo}>
          <span>4</span>
          <img src='/starbucks-icon.svg' alt='' />
          <span>4</span>
        </div>

        <p className={styles.message}>
          The page you were looking for doesn't exist.
        </p>

        <div className={styles['button-wrapper']}>
          <button onClick={() => navigate('/home')}>
            <FaHome />
            <span>Go to Home</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error
