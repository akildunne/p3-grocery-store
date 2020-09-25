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

//Not sure if I need this. Couldn't get changes with only one style tag for both
const ProductPrice = styled.div`

`;


const ProductCard = (props) => {
  return (
    <>
      <CardContainer>
        <ProductLink className="product" to={`/products/${props._id}`}>
          <ProductImage src={props.imgURL} alt={props.product} />
            <ProductName>{props.product}</ProductName>
            <ProductPrice>{`${props.price}`}</ProductPrice>
        </ProductLink>
      </CardContainer>
    </>
  );
};

export default ProductCard;
