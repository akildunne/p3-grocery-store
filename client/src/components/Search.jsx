import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  width: 50vw;
  height: 50px;
  border: 2px solid #707070;
  border-radius: 20px;
  padding: 16px;
  font: Helvetica, regular;
  font-size: 25px;
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
