import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/products';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
    }
    fetchProducts()
  }, [])

  const productJSX = allProducts.map((product, index) =>
    <ProductCard key={index} title={product.product} description={product.description} price={product.price} image={product.imgURL} id={product._id}/>)

  return (
    <div>
      {productJSX}
      <h4>Products!</h4>
    </div>
  )
}

export default Products;