import React, { useState, useEffect } from "react";
import Layout from "../components/shared/Layout";
import { useParams, Link, Redirect } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/products";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  margin: 20px auto;
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

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #40a48b;
  width: auto;
  height: 544px;
  font: medium Futura;
  color: white;
`;

const ImageContainer = styled.img`
  height: 251px;
  width: 251px;
  margin-left: 123px;
  border-radius: 15%;
  border: 1px solid #707070;
`;

const ProductName = styled.div`
  font-size: 35px;
`;
const ProductPrice = styled.div`
  font-size: 25px;
`;

const ProductDescription = styled.div`
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  background-color: white;
  margin-top: 35px;
  height: 150px;
`;

const EditButton = styled.button`
  text-decoration: none;
  font-size: 25px;
  font: medium 25px Futura;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #2EAF56;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 20px;
  box-shadow: 5px 5px 6px #00000029;

  :hover {
    transform: scale(1.1);
`;

const DeleteButton = styled.button`
  text-decoration: none;
  font-size: 25px;
  font: normal normal medium 25px Futura;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background-color: #2EAF56;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 20px;
  box-shadow: 5px 5px 6px #00000029;

  :hover {
    transform: scale(1.1);
`;

const ProductDetail = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [product, setProduct] = useState({
    product: "",
    imgURL: "",
    description: "",
    price: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const productDeleted = async (event) => {
    event.preventDefault();
    const deleted = await deleteProduct(product._id);
    setIsDeleted(deleted);
  };

  if (isDeleted) {
    return <Redirect to="/products" />;
  }

  return (
    <Layout>
      <BackDiv>
        <BackButton to="/products">
          <i className="fas fa-caret-left"></i>
        </BackButton>
      </BackDiv>
      <ProductDetailContainer>
        <ImageContainer src={product.imgURL} alt={product.product} />
        <ProductName>{product.product}</ProductName>
        <ProductPrice>{`${product.price}`}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductDetailContainer>
      <ButtonContainer>
        <Link to={`/products/edit/${product._id}`}>
        <EditButton>Edit</EditButton>
        </Link>
          <DeleteButton onClick={productDeleted}>Delete</DeleteButton>
        </ButtonContainer>
    </Layout>
  );
};

export default ProductDetail;
