import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 50vw;
  height: 25px;
  border: 2px solid #707070;
  border-radius: 20px;
  padding: 16px;
  font: Helvetica, regular;
  font-size: 25px;
`;

const SearchIcon = styled.i`
  text-align: right;
  font-size: 35px;
  color: #9d9d9d;
  margin-left: 725px;
  position: absolute;
`;

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <SearchContainer>
        <SearchBar
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          name="Search"
          placeholder="Search"
          autoFocus
        />
         <SearchIcon className="fas fa-search"></SearchIcon>
      </SearchContainer>
    </form>
  );
};

export default Search;
