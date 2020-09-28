import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { Link } from "react-router-dom";
import { getProducts } from "../services/products";
import Layout from "../components/shared/Layout";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  margin: 15px auto;
  padding-left: 36px;
`;

const BackButton = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #939191;
  font-size: 45px;
  margin: 0;

  :hover {
    transform: scale(1.1);
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 50px 200px;
  justify-content: end;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 100px;
  padding: 30px;
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
    <Layout>
      <BackDiv>
        <BackButton to="/">
          <i className="fas fa-caret-left"></i>
        </BackButton>
      </BackDiv>
      <FlexDiv>
        <Search />
        <Sort />
      </FlexDiv>
      <CardContainer>{productJSX}</CardContainer>
    </Layout>
  );
};

export default Products;
