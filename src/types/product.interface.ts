export interface IProduct {
  id: number
  name: string
  slug: string
  images: string[]
  price: number
  nutritionalInfo: INutritionalInfo[]
  variations: IVariations[]
  calories: string
}

export interface IVariations {
  name: 'Size' | 'Milk' | 'Topping'
  variants: string[]
}

export interface INutritionalInfo {
  name: string
  grams: string
}

export type TSizesData = '' | 'Tall' | 'Grande' | 'Venti'
