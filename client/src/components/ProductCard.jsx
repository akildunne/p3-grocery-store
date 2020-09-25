import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  width: 220px;
  height: 245px;
  background-color: #22C380;
  border-radius: 15%;

  :hover {
    transform: scale(1.1);
`;
const ProductImage = styled.img`
  width: 167px;
  height: 165px;
  margin-top: 8px;
  border-radius: 15%;
`;
const ProductLink = styled(Link)`
  text-decoration: none;
  font: normal normal medium 15px/20px Futura;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const ProductName = styled.div`
  margin-top: 8px;
`;

const ProductCard = (props) => {
  return (
    <>
      <CardContainer>
        <ProductLink  to={`/products/${props.id}`}>
          <ProductImage src={props.imgURL} alt={props.product} />
            <ProductName>{props.product}</ProductName>
            <div>{`${props.price}`}</div>
        </ProductLink>
      </CardContainer>
    </>
  );
};

export default ProductCard;
