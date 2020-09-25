import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
// import Layout from '../../components/shared/Layout/Layout'
import { getProduct, updateProduct } from "../services/products";
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
`;

const ProductEdit = (props) => {
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

  if (isUpdated) {
    return <Redirect to={`/products/${product._id}`} />
  }
  
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
            value={product.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </Wrapper>
        <Button>Save</Button>
      </Form>
    </DetailContainer>
  );
};

export default ProductEdit;
