import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/shared/Layout";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/products";

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const CoverPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(https://i.imgur.com/G85wd6P.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
`;

const Banner = styled.div`
  width: 100%;
  border: 1px solid #707070;
  background: rgba(64, 164, 139, 0.7);
`;

const HeadingContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const HeaderWelcome = styled.h2`
  font-size: 60px;
  color: white;
  text-align: center;
  font-weight: 400;
`;

const ShopNowButton = styled.button`
  font-size: 36px;
  background-color: #2eaf56;
  color: white;
  text-align: center;
  font-weight: 400;
  padding: 20px 25px;
  margin-top: 20px;
  border-style: none;
  border-radius: 13px;
  cursor: pointer;

  :hover {
    background-color: #299a4b;
  }
`;

const CarouselTitle = styled.div`
  font-size: 30px;
  font: futura, bold;
  color: #40A48B;
  margin-top: 35px;
  margin-bottom: 15px;
`

const Carousel = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftButton = styled.div`
  display: flex;
  align-items: center;
  color: #40A48B;
  font-size: 135px;
  margin: 0 10px 0 10px;

  :hover {
    transform: scale(1.1);
`

const RightButton = styled.div`
  display: flex;
  align-items: center;
  color: #40A48B;
  font-size: 135px;
  margin: 0 10px 0 10px;

  :hover {
    transform: scale(1.1);
`;

const FeaturedCards = styled.div`
  display: flex;
`;

const StoryContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const OurStoryTitle = styled.h4`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font: futura, bold;
  color: #707070;

  @media (min-width: 1260px) {
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const OurStoryText = styled.p`
  font-size: 18px;
  margin-left: 75px;
  margin-right: 75px;
  color: #707070;

  @media (min-width: 1260px) {
    font-size: 24px;
    margin-left: 100px;
    margin-right: 100px;
  }
`;

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const featuredProducts = allProducts.filter((element) =>
      element.featured === true)
    setFilteredProducts(featuredProducts);
  }, [allProducts]);

  const featuredJSX = filteredProducts.map((product, index) => (
    <ProductCard
      key={index}
      product={product.product}
      description={product.description}
      price={product.price}
      imgURL={product.imgURL}
      id={product._id}
    />
  ));

  return (
    <Layout>
      <HomeMainContainer>
        <div>
          <CoverPhoto>
            <Banner>
              <HeadingContainer>
                <HeaderWelcome>WELCOME TO D.T.'S PANTRY!</HeaderWelcome>
                <HeaderWelcome>
                  We've got all of your grocery needs covered
                </HeaderWelcome>
              </HeadingContainer>
            </Banner>
            <Link to="/products">
              <ShopNowButton>SHOP NOW</ShopNowButton>
            </Link>
          </CoverPhoto>
        </div>
        <div>
          <CarouselTitle>FEATURED PRODUCTS</CarouselTitle>
          <Carousel>
            <FeaturedCards>{featuredJSX}</FeaturedCards>
          </Carousel>
        </div>
        <StoryContainer>
          <OurStoryTitle>Our Story</OurStoryTitle>
          <OurStoryText>
            Danger Turkey’s Pantry started off in 1971 as a small produce cart
            and meat stand outside of the tropical forests of New Guinea. Our
            mission then was to provide cassowaries with quality groceries so
            that they might stop attacking and eating humans. The cassowaries
            were mostly unimpressed with our plan, but we did get pretty good at
            procuring fine groceries at low costs. Today, we are proud to serve
            your community with a wide variety of top quality foods including
            all of the brands you know and love. Come on down and shop with us,
            and <strong>don’t feed the cassowaries!</strong>
          </OurStoryText>
        </StoryContainer>
      </HomeMainContainer>
    </Layout>
  );
};

export default Home;
