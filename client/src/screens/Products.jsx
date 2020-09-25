import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import { getProducts } from '../services/products';
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;  
  flex-flow: row wrap;
  margin: 200px auto;
  justify-content: space-around;
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
    <>
      <Search />
      <CardContainer>
        {productJSX}
      </CardContainer>      
    </>

  )
}

export default Products;