import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Sort from "../components/Sort";
import BackButton from '../components/BackButton';
import { getProducts } from "../services/products";
import { AZ, ZA, lowestFirst, highestFirst } from "../utils/sort"
import Layout from "../components/shared/Layout";
import styled from "styled-components";


const LoadingMessage = styled.div`
  color: #40A48B;
  margin: 50px;
  font: medium Futura;
  font-size: 45px;
`;

const BackDiv = styled.div`
  display: flex;
  margin: 15px auto;
  padding-left: 36px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 50px 50px;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
  padding: 15px 30px;
`;

const Products = () => {
  const [redirect, setRedirect] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
      setIsLoaded(true);
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
  };

  const handleSubmit = (event) => event.preventDefault();

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

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
      <SearchDiv>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} /> 
      </SearchDiv>
      <CardContainer>
        {isLoaded
          ? (productJSX.length === 0 ? <p>Out of Stock</p> : productJSX)
          : <LoadingMessage><i className="fas fa-shopping-cart"></i> Please wait, stocking shelves...</LoadingMessage>
        }
      </CardContainer> 
    </Layout>
  );
};

export default Products;
