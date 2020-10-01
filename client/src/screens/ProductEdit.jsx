import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../components/shared/Layout";
import BackButton from "../components/BackButton";
import { getProduct, updateProduct } from "../services/products";
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
  grid-template-columns: 250px 500px;
  align-items: center;  
  justify-items: flex-end;
`;

const LabelContainer = styled.label`
  color: #707070;
  font-size: 28px;
`;

const InputContainer = styled.input`
  width: 400px;
  height: 30px;
  margin: 10px;
  border: 1px solid #707070;
  border-radius: 22px;
  padding: 10px;
  font-size: 18px;
  outline: none;
`;

const LabelTextArea = styled.label`
  color: #707070;
  font-size: 28px;
  align-self: flex-start;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  border-radius: 22px;
  width: 400px;
  justify-self: flex-end;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  outline: none;
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
`;

const ProductEdit = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [product, setProduct] = useState({
    product: "",
    imgURL: "",
    description: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to={`/products/${product._id}`} />;
  }

  if (isUpdated) {
    return <Redirect to={`/products/${product._id}`} />;
  }

  return (
    <Layout>
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
            rows={10}
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
          <Button>Save</Button>
        </Form>
      </DetailContainer>
    </Layout>
  );
};

export default ProductEdit;
