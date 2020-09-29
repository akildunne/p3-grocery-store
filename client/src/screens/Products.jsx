import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { Link } from "react-router-dom";
import { getProducts } from "../services/products";
import { AZ, ZA, lowestFirst, highestFirst } from "../utils/sort"
import Layout from "../components/shared/Layout";
import styled from "styled-components";
// import Spinner from 'react-bootstrap/Spinner';


const LoadingMessage = styled.div`
  color: #40A48B;
  margin: 50px;
  font-size: 35px;
  font: medium Futura;
`

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
  justify-content: center;
  margin: 50px 50px;
  // justify-content: end;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
  padding: 15px 30px;
`;

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
      setLoading(true);
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

  return (
    <Layout>
      <BackDiv>
        <BackButton to="/">
          <i className="fas fa-caret-left"></i>
        </BackButton>
      </BackDiv>
      <SearchDiv>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} /> 
      </SearchDiv>
      <CardContainer>{loading ? productJSX : <LoadingMessage>Please wait, stocking shelves...  </LoadingMessage>}

      </CardContainer>
    </Layout>
  );
};

export default Products;
