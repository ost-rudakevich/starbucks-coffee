import Catalog from 'ui/catalog/Catalog'

interface IRoutesMenuData {
  name: string
  link: string
  component: React.ComponentType
}

export const ROUTES_MENU_DATA: IRoutesMenuData[] = [
  {
    name: 'Coffee',
    link: '/coffee',
    component: Catalog
  },
  {
    name: 'Tea',
    link: '/tea',
    component: Catalog
  }
]
