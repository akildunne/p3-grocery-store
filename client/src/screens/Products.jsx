import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/products';
import styled from "styled-components";

const CardContainers = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
`

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
    <ProductCard key={index} product={product.product} description={product.description} price={product.price} imgURL={product.imgURL} id={product._id}/>)

  return (
    <CardContainers>
      {productJSX}
    </CardContainers>
  )
}

export default Products;