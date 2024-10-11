import { FC } from 'react'
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.outlet}>
        <Outlet />
      </section>
    </div>
  )
}

export default Layout
