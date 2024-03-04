import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../../../store/products'
export default function ProductList() {
  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  console.log(products,"state")
  return (
    <div>Product List</div>
  )
}
