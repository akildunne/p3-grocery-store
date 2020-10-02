import React, { useState, useEffect } from "react";
import Layout from "../components/shared/Layout";
import BackButton from '../components/BackButton';
import { useParams, Link, Redirect } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/products";
import Reviews from "../screens/Reviews";
import StarRatings from 'react-star-ratings'
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  margin: 15px auto;
  padding-left: 36px;
`;

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #40a48b;
  width: auto;
  height: 544px;
  font: medium Futura;
  color: white;
  box-shadow: 0px 3px 6px #00000029;

  @media (max-width: 800px) {
    height: 494px
  }

  @media (max-width: 400px) {
    flex-direction: column;
    height: 520px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 50px;

  @media (max-width: 800px) {
    margin-left: 40px;
  }

  @media (max-width: 400px) {
    margin-left: 20px;
  }
`;

const CoverPhoto = styled.img`
  display: flex;
  height: 251px;
  width: 251px;
  margin: 77px auto 25px;
  border-radius: 15%;
  border: 1px solid #707070;

  @media (max-width: 800px) {
    height: 221px;
    width: 221px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    margin: 30px auto 25px;
  }
`;

const ThumbnailContainer = styled.div`
  align-items: top;
  justify-content: center;
`;

const Thumbnails = styled.img`
  height: 92px;
  width: 105px;
  border-radius: 15%;
  border: 1px solid #707070;
  margin: 0px 15px;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    height: 62px;
    width: 75px;
    margin: 0px 7px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const ProductInfoContainer = styled.div`
  margin-top: 95px;
  margin-left: 45px;

  @media (max-width: 800px) {
  
  }

  @media (max-width: 400px) {
    margin: 10px auto;
  }
`;

const ProductName = styled.h4`
  font-size: 35px;
  margin: 10px auto;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 27px;
    margin: 6px auto;
  }

  @media (max-width: 400px) {
    font-size: 27px;
    margin: 6px auto;
  }
`;

const ProductDetails = styled.p`
  font-size: 25px;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 22px;
    margin: 6px auto;
  }

  @media (max-width: 400px) {
    font-size: 20px;
    margin: 6px auto;
  }
`;

const ProductReviewContainer = styled.div`
  text-align: left;
`;


const ButtonContainer = styled.div`
  display: flex;
  background-color: white;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  

  @media (max-width: 800px) {
    justify-content: center;
    margin-left: 0px;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    justify-content: center;
    margin-left: 0px;
    height: 80px;
   }
`;

const EditButton = styled.button`
  text-decoration: none;
  font-size: 25px;
  font: medium 25px Futura;
  color: #ffffff;
  background-color: #2EAF56;
  border-radius: 10px;
  padding: 5px 25px;
  margin: 20px 30px;
  border: none;
  box-shadow: 5px 5px 6px #00000029;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  :focus {
    outline: none;
    border: 3px solid #2eaf56;
    border-radius: 10px;
  }
`;

const DeleteButton = styled.button`
  text-decoration: none;
  font-size: 25px;
  font: medium 25px Futura;
  color: #ffffff;
  opacity: 1;
  background-color: #2EAF56;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 20px 30px;
  border: none;
  box-shadow: 5px 5px 6px #00000029;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  :focus {
    outline: none;
    border: 3px solid #2eaf56;
    border-radius: 10px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: flex-start;
  align-items: left;
`

const ReviewHeading = styled.h3`
  font-size: 20px;
  text-align: left;
  margin-left: 100px;
  
  @media (max-width: 800px) {
    font-size: 25px;
    margin-left: 70px;
   }
 
   @media (max-width: 400px) {
    font-size: 20px;
     margin-left: 40px;
    }
`

const ProductDetail = () => {
  const [redirect, setRedirect] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [product, setProduct] = useState({
    review: undefined,
    product: "",
    imgURL: "",
    imgURL2: "",
    imgURL3: "",
    imgURL4: "",
    description: "",
    price: "",
    reviews: []
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setActiveImage(product.imgURL);
    };
    fetchProduct();
  }, [id]);

  const deleteConfirmation = () => {
    let r = window.confirm("Are you sure you want to delete this product?");
    if (r === true) {
      productDeleted();
    } else {
    }
  };

  const productDeleted = async () => {
    const deleted = await deleteProduct(product._id);
    setIsDeleted(deleted);
  };

  const goBack = () => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/products" />;
  }

  if (isDeleted) {
    return <Redirect to="/products" />;
  }

  return (
    <Layout>
      <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
      <ProductDetailContainer>
        <ImageContainer>
          <div>
            <CoverPhoto src={activeImage} alt={product.product} />
          </div>
          <ThumbnailContainer>
            <Thumbnails
              src={product.imgURL}
              alt={product.product}
              onClick={(e) => setActiveImage(e.target.src)}
            />
            <Thumbnails
              src={product.imgURL2}
              alt={product.product}
              onClick={(e) => setActiveImage(e.target.src)}
            />
            <Thumbnails
              src={product.imgURL3}
              alt={product.product}
              onClick={(e) => setActiveImage(e.target.src)}
            />
            <Thumbnails
              src={product.imgURL4}
              alt={product.product}
              onClick={(e) => setActiveImage(e.target.src)}
            />
          </ThumbnailContainer>
        </ImageContainer>
        <ProductInfoContainer>
          <ProductName>{product.product}</ProductName>
          <ProductDetails>${product.price}</ProductDetails>
          <ProductReviewContainer>
            <StarRatings
              rating={product.review}
              starRatedColor="white"
              starDimension="25px"
              starSpacing="0px"
            />
          </ProductReviewContainer>
          <ProductDetails>{product.description}</ProductDetails>
        </ProductInfoContainer>
      </ProductDetailContainer>
      <ButtonContainer>
        <Link to={`/products/edit/${product._id}`}>
          <EditButton>Edit</EditButton>
        </Link>
        <DeleteButton onClick={deleteConfirmation}>Delete</DeleteButton>
      </ButtonContainer>
      {product.reviews.length === 0 
        ? null
        : <ReviewContainer>
          <ReviewHeading>Customer reviews:</ReviewHeading>
            <Reviews reviews={product.reviews} />   
          </ReviewContainer>
      }
    </Layout>
  );
};

export default ProductDetail;
