import React, { useState, useEffect } from "react";
import Layout from "../components/shared/Layout";
import { useParams, Link, Redirect } from "react-router-dom";
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
`

const CoverImage = styled.img`
  height: 251px;
  width: 251px;
  margin-left: 123px;
  border-radius: 15%;
`

const ThumbnailImage = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 123px;
  border-radius: 15%;
`

const ProductDetail = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [product, setProduct] = useState({
    product: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    imgURL4: "",
    description: "",
    price: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setActiveImage(product.imgURL)
    };
    fetchProduct();
  }, [id]);


  const handleImageClick = (value) => {
    switch (value) {
      case ("imgURL"):
        setActiveImage(product.imgURL)
        break;
      case ("imgURL2"):
        setActiveImage(product.imgURL2)
        break;
      case ("imgURL3"):
        setActiveImage(product.imgURL3)
        break;
      case ("imgURL4"):
        setActiveImage(product.imgURL4)
        break;
      default:
        setActiveImage(product.imgURL)
    }
  } 

  const productDeleted = async (event) => {
    event.preventDefault();
      const deleted = await deleteProduct(product._id);
    setIsDeleted(deleted);
    };

  
  if (isDeleted) {
    return <Redirect to="/products" />;
  }

  return (
    <Layout user={props.user}>
      <ProductDetailContainer>
        <div>
          <div><CoverImage src={activeImage} /></div>                              
          <div>
            <ThumbnailImage
              src={product.imgURL}
              value="imgURL"
              onClick={() => handleImageClick("imgURL")}
            />
            <ThumbnailImage
              src={product.imgURL2}
              value="imgURL2"
              onClick={() => handleImageClick("imgURL2")}
            />
            <ThumbnailImage
              src={product.imgURL3}
              value="imgURL3"
              onClick={() => handleImageClick("imgURL3")}
            />
            <ThumbnailImage
              src={product.imgURL4}
              value="imgURL4"
              onClick={() => handleImageClick("imgURL4")}
            />            
          </div>
        </div>
        <h3>{product.product}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <div>
          <Link to={`/products/edit/${product._id}`}><button>Edit</button></Link>        
          <button onClick={productDeleted}>Delete</button>        
        </div>
      </ProductDetailContainer>
    </Layout>
  );
};

export default ProductDetail;
