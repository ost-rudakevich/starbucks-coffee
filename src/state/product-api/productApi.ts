import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from 'types/product.interface'

const BASE_URL = 'http://localhost:3001'

interface IGetProductsBySlugProps {
  category: string
  slug: string
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProductByCategory: builder.query<IProduct[], string>({
      query: category => category
    }),
    getProductBySlug: builder.query<IProduct[], IGetProductsBySlugProps>({
      query: ({ category, slug }) => `/${category}/?slug=${slug}`
    })
  })
})

export const { useGetProductByCategoryQuery, useGetProductBySlugQuery } =
  productApi
