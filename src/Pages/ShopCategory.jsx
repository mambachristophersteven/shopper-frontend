import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
export const ShopCategory = () => {

  const {all_products} = useContext(ShopContext)
  return (
    <div>ShopCategory</div>
  )
}
