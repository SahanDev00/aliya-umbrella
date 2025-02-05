import React, { useEffect } from 'react'
import AllProducts from '../components/ProductsPage/AllProducts'

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AllProducts/>
    </div>
  )
}

export default Products