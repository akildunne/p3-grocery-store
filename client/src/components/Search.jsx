import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  width: 60vw;
  height: 50px;
  border: 2px solid #707070;
  border-radius: 20px;
  padding: 16px;
  font: Helvetica, regular;
  font-size: 25px;
  color: #707070;
  
  :focus {
    outline: none;
    border: 3px solid #2EAF56;
    border-radius: 22px;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 400px) {
    width: 72vw;
  }
`;

const SearchIcon = styled.span`
  font-size: 25px;
  color: #9d9d9d;
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
`;

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <SearchContainer>
        <SearchBar
          type="search"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          name="Search"
          placeholder="Search"
        />
         <SearchIcon className="fas fa-search"></SearchIcon>
      </SearchContainer>
    </form>
  );
};

export default Search;
