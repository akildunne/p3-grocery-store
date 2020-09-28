import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { Link } from "react-router-dom";
import { getProducts } from "../services/products";
import { AZ, ZA, lowestFirst, highestFirst } from "../utils/sort"
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
`;

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts));
        break;
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts));
        break;
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts));
        break;
      default:
        break;
    }
  };
  const handleSearch = (event) => {
    const newQueriedProducts = allProducts.filter((product) =>
      product.product.toLowerCase().includes(event.target.value.toLowerCase())
    );
     setQueriedProducts(newQueriedProducts, () => handleSort(sortType));
    // setQueriedProducts(newQueriedProducts);
  };

  const handleSubmit = (event) => event.preventDefault();

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
    <Layout>
      <BackDiv>
        <BackButton to="/">
          <i className="fas fa-caret-left"></i>
        </BackButton>
      </BackDiv>
      <FlexDiv>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} /> 
      </FlexDiv>
      <CardContainer>{productJSX}</CardContainer>
    </Layout>
  );
};

export default Products;
