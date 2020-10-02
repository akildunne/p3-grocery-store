import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import BackButton from "../components/BackButton";
import { Redirect } from "react-router-dom";
import { createProduct } from "../services/products";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const BackDiv = styled.div`
  display: flex;
  padding-left: 36px;
  margin-top: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  margin: 50px auto;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 430px;
  align-items: center;
  justify-items: flex-end;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }
`;

const LabelContainer = styled.label`
  color: #707070;
  font-size: 28px;
`;

const InputContainer = styled.input`
  width: 30vw;
  height: 30px;
  margin: 10px;
  border: 1px solid #707070;
  border-radius: 22px;
  padding: 10px;
  font-family: regular, Helvetica;
  font-size: 25px;
  color: #707070;

  :focus {
    outline: none;
    border: 3px solid #40a48b;
    border-radius: 22px;
  }
`;

const LabelTextArea = styled.label`
  color: #707070;
  font-size: 28px;
  align-self: flex-start;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 30vw;
  justify-self: flex-end;
  margin: 10px;
  padding: 10px;
  font-family: regular, Helvetica;
  font-size: 25px;
  color: #707070;

  :focus {
    outline: none;
    border: 3px solid #40a48b;
    border-radius: 22px;
  }
`;

const Button = styled.button`
  background-color: #2eaf56;
  font: normal normal bold 36px/47px Futura;
  color: #ffffff;
  border: 1px solid #707070;
  border-radius: 22px;
  grid-column: 1/-1;
  width: 300px;
  margin: 20px auto;
  margin-top: 30px;
  margin-left: 45%;
  padding: 15px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }

  :focus {
    outline: none;
    border: 3px solid #40a48b;
    border-radius: 22px;
  }
`;

const ProductCreate = () => {
  const [redirect, setRedirect] = useState(false);
  const [isCreated, setCreated] = useState(false);
  const [product, setProduct] = useState({
    product: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    imgURL4: "",
    description: "",
    price: "",
    featured: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
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

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }

  return (
    <Layout>
      <MainContainer>
        <BackDiv>
          <BackButton onClick={(e) => goBack()}></BackButton>
        </BackDiv>
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
            <LabelContainer>Image Link 2:</LabelContainer>
            <InputContainer
              type="text"
              value={product.imgURL2}
              name="imgURL2"
              required
              onChange={handleChange}
            />
            <LabelContainer>Image Link 3:</LabelContainer>
            <InputContainer
              type="text"
              value={product.imgURL3}
              name="imgURL3"
              required
              onChange={handleChange}
            />
            <LabelContainer>Image Link 4:</LabelContainer>
            <InputContainer
              type="text"
              value={product.imgURL4}
              name="imgURL4"
              required
              onChange={handleChange}
            />
            <LabelContainer>Feature in Carousel:</LabelContainer>
            <label class="container">
              <input
                type="checkbox"
                checked={product.featured}
                name="featured"
                onChange={handleChange}
              />
              <span class="checkmark"></span>
            </label>
            <Button>Add Product</Button>
          </Form>
        </DetailContainer>
      </MainContainer>
    </Layout>
  );
};

export default ProductCreate;
