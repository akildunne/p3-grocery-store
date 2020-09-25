import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1230px;
  margin: 0 auto;
`;

const CoverPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
`;

const Banner = styled.div`
  width: 100%;
  background-color: #40a48b;
  border: 1px solid #707070;
  opacity: 0.7;
`;

const HeadingContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`

const HeaderWelcome = styled.h2`
  font-size: 60px;
  color: white;
  text-align: center;
  font-weight: 400;
`

const ShopNowButton = styled.button`
  font-size: 36px;
  background-color: #2EAF56;
  color: white;
  text-align: center;
  font-weight: 400;
  padding: 20px 25px;
  margin-top: 20px;
  border-style: none;
  border-radius: 13px;
  cursor: pointer;

  :hover {
    background-color: #299A4B;
  }
`

const StoryContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

const Home = () => {
  return (
    <HomeMainContainer>
      <div>
        <Nav />
        <CoverPhoto>
          <Banner>
            <HeadingContainer>
              <HeaderWelcome>WELCOME TO D.T'S PANTRY!</HeaderWelcome>
              <HeaderWelcome>We've got all of your grocery needs covered</HeaderWelcome>  
            </HeadingContainer>  
          </Banner>  
          <Link to="/products">
            <ShopNowButton>SHOP NOW</ShopNowButton>
          </Link>  
        </CoverPhoto> 
      </div>  
      <StoryContainer>
        <h4>Our Story</h4>
        <p>Danger Turkey’s Pantry started off in 1971 as a small produce cart and meat stand outside of the tropical forests of New Guinea. Our mission then was to provide cassowaries with quality groceries so that they might stop attacking and eating humans. The cassowaries were mostly unimpressed with our plan, but we did get pretty good at procuring fine groceries at low costs. Today, we are proud to serve your community with a wide variety of top quality foods including all of the brands you know and love. Come on down and shop with us, and don’t feed the cassowaries!</p>
      </StoryContainer>
    </HomeMainContainer>
  );
};

export default Home;
