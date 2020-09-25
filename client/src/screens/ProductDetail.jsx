import React, { useState, useEffect } from "react";
// import Layout from '../components/shared/Layout';
import { useParams, Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/products";
import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #40a48b;
  width: auto;
  height: 544px;
  font: medium 22px/30px Futura;
`;

const ImageContainer = styled.img`
  height: 251px;
  width: 251px;
  margin-left: 123px;
  border-radius: 15%;
`;

const ProductDetail = (props) => {
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

  return (
    <>
      <ProductDetailContainer>
        <ImageContainer src={product.imgURL} alt={product.product} />
          <div className="product">{product.product}</div>
          <div className="price">{`${product.price}`}</div>
          <div className="description">{product.description}</div>
          <div className="button-container">

                        <button className="edit-button"><Link className="edit-link" to={`/products/edit/${product.id}`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
        </div>
      </div>


      </ProductDetailContainer>

    </>
  );
};

export default ProductDetail;
