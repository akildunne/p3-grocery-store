import React, { useState } from "react";
// import Layout from '../../components/shared/Layout'
import { Redirect } from "react-router-dom";
import { createProduct } from "../services/products";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 500px;
  margin: 0 auto;
  align-items: center;
  justify-items: flex-end;
`

const LabelContainer = styled.label`
  color: #707070;
  font-size: 36px;
`

const InputContainer = styled.input`
  justify-self: flex-end;
  width: 400px;
  height: 40px; 
  margin: 24px;
  border: 1px solid #707070;
  border-radius: 22px;
  padding: 15px;
  font-size: 28px;
`

const LabelTextArea = styled.label`
  color: #707070;
  font-size: 36px;  
  align-self: flex-start;
  margin-top: 25px;
`

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 400px;
  justify-self: flex-end;
  margin: 24px;
  padding: 15px;
  font-size: 28px;
`

const Button = styled.button`
  background-color: #2eaf56;
  font: normal normal bold 36px/47px Futura;
  color: #ffffff;
  border: 1px solid #707070;
  border-radius: 22px;
  grid-column: 1/-1;
  width: 300px;
  margin: 20px auto;
  margin-top: 20px;
  margin-left: 45%;
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: #299A4B;
  }
`


const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    product: "",
    imgURL: "",
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

  if (isCreated) {
    return <Redirect to={`/products`} />
}

  return (
    <DetailContainer>
      <Form onSubmit={handleSubmit}>
        <LabelContainer>Product Name:</LabelContainer>
        <InputContainer
          type="text"
          value={product.product}
          name="product"
          required
          autoFocus
          onChange={handleChange}
        />
        <LabelContainer>Price:</LabelContainer>
        <InputContainer
          type="text"
          value={product.price}
          name="price"
          required
          onChange={handleChange}
        />
        <LabelTextArea>Description:</LabelTextArea>
        <TextArea
          rows={4}
          columns={20}
          value={product.description}
          name="description"
          required
          onChange={handleChange}
        />
        <LabelContainer>Image Link:</LabelContainer>
        <InputContainer
          type="text"
          value={product.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <Button>Add Product</Button>
      </Form>
    </DetailContainer>
  );
};

export default ProductCreate;
