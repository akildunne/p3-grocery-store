import React, { useState } from "react";
// import Layout from '../../components/shared/Layout'
import { Redirect } from "react-router-dom";
import { createProduct } from "../services/products";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  align-items: flex-end;
`;
const InputContainer = styled.input`
  display: flex;
  justify-content: space-evenly;
  margin: 12px;
  border-radius: 10%
  border: 1px solid #707070;
  border-radius: 22px;
`;

const LabelContainer = styled.label`
  color: #707070;
  font-size: 36px;
  text-align: left;
`;
const Button = styled.button`
  background-color: #2eaf56;
  text-align: center;
  font: normal normal bold 36px/47px Futura;
  letter-spacing: 0px;
  color: #ffffff;
  border: 1px solid #707070;
  border-radius: 22px;
`;
const Wrapper = styled.div`
  display: flex;
  border-radius: 10%
  border: 1px solid #707070;
  border-radius: 22px;

`;

const TextArea = styled.textarea`
border-radius: 10px;
`

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
        <Wrapper>
          <LabelContainer>Product Name:</LabelContainer>
          <InputContainer
            type="text"
            value={product.product}
            name="product"
            required
            autoFocus
            onChange={handleChange}
          />
        </Wrapper>
        <Wrapper>
          <LabelContainer>Price</LabelContainer>
          <InputContainer
            type="text"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
        </Wrapper>
        <Wrapper>
          <LabelContainer>Description:</LabelContainer>
          <TextArea
            rows={10}
            columns={20}
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
        </Wrapper>
        <Wrapper>
          <LabelContainer>Img Link:</LabelContainer>
          <InputContainer
            type="text"
            value={product.imgUrl}
            name="imgUrl"
            required
            onChange={handleChange}
          />
        </Wrapper>
        <Button>Add Product</Button>
      </Form>
    </DetailContainer>
  );
};

export default ProductCreate;
