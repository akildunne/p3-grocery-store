import React, { useState } from "react";
// import Layout from '../../components/shared/Layout'
import { Redirect } from "react-router-dom";
import { createProduct } from "../services/products";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 200px 200px;
  margin: 0 auto;
  width: 450px;
  justify-content: space-evenly;
`;
const InputContainer = styled.input`
  display: flex;
  justify-content: space-evenly;
  margin: 8px;
`;
const Button = styled.button`
  background-color: #2eaf56;
  text-align: center;
  font: normal normal bold 36px/47px Futura;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const NewDiv = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    product: "",
    imgUrl: "",
    description: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  return (
    <DetailContainer>
      <Form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <InputContainer
          type="text"
          value={product.product}
          name="product"
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Price</label>
        <InputContainer
          type="text"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          type="text"
          rows={10}
          columns={30}
          value={product.description}
          name="content"
          required
          onChange={handleChange}
        />
        <label>Img Link</label>
        <InputContainer
          type="text"
          value={product.imgUrl}
          name="imgUrl"
          required
          onChange={handleChange}
        />
        <NewDiv>
          <Button>Add Product</Button>
        </NewDiv>
      </Form>
    </DetailContainer>
  );
};

export default ProductCreate;
