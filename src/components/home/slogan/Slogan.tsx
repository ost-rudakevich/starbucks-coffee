import { Link } from 'react-router-dom'
import styles from './Slogan.module.scss'

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h1>
        It's Not Just A
        <br />
        Coffee, It's
        <br />
        <span>Starbucks</span>
      </h1>

      <div className={styles.advertising}>
        <span>Pumpkin Spice Latte</span>

        <p>
          Our signature espresso and milk are highlighted by flavor notes of
          pumpkin, cinnamon, nutmeg and clove to create this incredible beverage
          that's a fall favorite. Enjoy it topped with whipped cream and real
          pumpkin pie spices.
        </p>
      </div>

      <Link to={'/coffee'}>
        <button className={styles.btn}>Get Your Coffee</button>
      </Link>
    </div>
  )
}

export default Slogan
