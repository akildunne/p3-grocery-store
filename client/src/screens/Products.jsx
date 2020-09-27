import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { getProducts } from "../services/products";
import Layout from "../components/shared/Layout";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 50px 200px;
  justify-content: end;
`

const FlexDiv = styled.div`
  display: flex;
  margin: 100px;
`

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const newQueriedProducts = allProducts.filter(search => search.product.toLowerCase().includes(e.target.value.toLowerCase()))
    // setQueriedProducts(newQueriedProducts, () => handleSort(sortType))
    setQueriedProducts(newQueriedProducts);
  }

  const handleSubmit = (e) => e.preventDefault();


  const productJSX = queriedProducts.map((product, index) => (
    <ProductCard
      key={index}
      product={product.product}
      description={product.description}
      price={product.price}
      imgURL={product.imgURL}
      id={product._id}
    />
  ));

  return (
    <Layout user={props.user}>
      <FlexDiv>
        <Search onSubmit={handleSubmit} onChange={handleSearch}/>
        <Sort />
      </FlexDiv>
      <CardContainer>{productJSX}</CardContainer>
    </Layout>
  );
};

export default Products;
