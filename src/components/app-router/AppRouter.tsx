import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import Home from 'components/home/Home'
import { ROUTES_MENU_DATA } from 'utils/data/routes.data'
import ProductDetails from 'components/product-details/ProductDetails'

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home}></Route>
          {ROUTES_MENU_DATA.map(item => {
            return (
              <Route
                path={item.link}
                Component={item.component}
                key={item.link}
              />
            )
          })}
          <Route path=':category/:slug' Component={ProductDetails} />
          {/* <Route path=':coffee/:slug' Component={ProductDetails} /> */}
          <Route path='*' Component={Home} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
