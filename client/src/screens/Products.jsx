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
  align-items: center;
  margin: 100px;
  padding: 30px;
`

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const productJSX = allProducts.map((product, index) => (
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
      <Search />
        <Sort />
      </FlexDiv>
      <CardContainer>{productJSX}</CardContainer>
    </Layout>
  );
};

export default Products;
