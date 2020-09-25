import React, { useState, useEffect } from 'react';
// import Layout from '../components/shared/Layout';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';
// import styled from "styled-components";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({
    product: '',
    imgURL: '',
    description: '',
    price: ''
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  return (
    <>
      <div className="product-detail">
        <img className="product-detail-image" src={product.imgURL} alt={product.product} />
        <div className="detail">
          <div className="product">{product.product}</div>
          <div className="price">{`${product.price}`}</div>
          <div className="description">{product.description}</div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;