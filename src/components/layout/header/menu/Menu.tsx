import { FC } from 'react'
import styles from './Menu.module.scss'
import LOGO from '/starbucks-icon.svg'
import { NavLink } from 'react-router-dom'
import { ROUTES_MENU_DATA } from 'utils/data/routes.data'

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <NavLink to='/'>
        <img src={LOGO} alt='logo' />
      </NavLink>
      <nav>
        {ROUTES_MENU_DATA.map(route => {
          return (
            <NavLink to={route.link} key={route.name}>
              {route.name}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Menu
